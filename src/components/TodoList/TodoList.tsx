import React, { useContext, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  FlatList,
  Modal,
} from "react-native";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import * as S from "./TodoList.styles";

const TodoList = () => {
  const context = useContext(TodoContext);
  if (!context) {
    return null;
  }
  const { todos, loading, updateTodo, deleteTodo, addTodo } = context;
  const [newTodo, setNewTodo] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const handleAddTodo = () => {
    const trimmed = newTodo.trim();
    if (trimmed) {
      addTodo(trimmed);
      setNewTodo("");
    }
  };

  const handleRequestDelete = (id: string) => {
    setDeleteConfirmId(id);
  };

  const handleConfirmDelete = () => {
    if (deleteConfirmId) {
      deleteTodo(deleteConfirmId);
      setDeleteConfirmId(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmId(null);
  };

  if (loading) {
    return (
      <S.LoadingContainer>
        <ActivityIndicator size="large" color="#007AFF" />
        <S.LoadingText>Carregando...</S.LoadingText>
      </S.LoadingContainer>
    );
  }

  return (
    <S.Container>
      <S.AddContainer>
        <S.TitleText>To-Do List</S.TitleText>
        <S.Input
          placeholder="Adicionar novo item..."
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
          returnKeyType="done"
        />
        <Button
          title="Adicionar"
          onPress={handleAddTodo}
          disabled={!newTodo.trim()}
        />
      </S.AddContainer>
      {todos.length === 0 ? (
        <S.EmptyContainer>
          <S.EmptyIcon>📋</S.EmptyIcon>
          <S.EmptyTitle>Nenhuma tarefa</S.EmptyTitle>
          <S.EmptyText>
            Adicione uma nova tarefa usando o campo acima.
          </S.EmptyText>
        </S.EmptyContainer>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              onEdit={updateTodo}
              onDelete={handleRequestDelete}
            />
          )}
          contentContainerStyle={S.ListContent}
        />
      )}
      <Modal
        visible={deleteConfirmId !== null}
        transparent
        animationType="fade"
        onRequestClose={handleCancelDelete}
      >
        <S.ModalOverlay>
          <S.ModalContent>
            <S.ModalTitle>Confirmar exclusão</S.ModalTitle>
            <S.ModalText>
              Tem certeza que deseja remover esta tarefa?
            </S.ModalText>
            <S.ModalButtons>
              <Button title="Cancelar" onPress={handleCancelDelete} color="#999" />
              <Button
                title="Remover"
                onPress={handleConfirmDelete}
                color="#f44336"
              />
            </S.ModalButtons>
          </S.ModalContent>
        </S.ModalOverlay>
      </Modal>
    </S.Container>
  );
};

export { TodoList };
