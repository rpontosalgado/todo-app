import React, { useState } from 'react';
import { Button, FlatList } from 'react-native';
import { useTodoContext } from '../../contexts/TodoContext';
import { TodoItem } from '../TodoItem/TodoItem';
import { LoadingView } from './LoadingView/LoadingView';
import { EmptyState } from './EmptyState/EmptyState';
import { DeleteConfirmModal } from './DeleteConfirmModal/DeleteConfirmModal';
import * as S from './TodoList.styles';

const TodoList = () => {
  const { todos, loading, updateTodo, deleteTodo, addTodo } = useTodoContext();
  const [newTodo, setNewTodo] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const handleAddTodo = () => {
    const trimmed = newTodo.trim();
    if (trimmed) {
      addTodo(trimmed);
      setNewTodo('');
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
    return <LoadingView />;
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
        <Button title="Adicionar" onPress={handleAddTodo} disabled={!newTodo.trim()} />
      </S.AddContainer>
      {todos.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TodoItem todo={item} onEdit={updateTodo} onDelete={handleRequestDelete} />
          )}
          contentContainerStyle={S.ListContent}
        />
      )}
      <DeleteConfirmModal
        visible={deleteConfirmId !== null}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </S.Container>
  );
};

export { TodoList };
