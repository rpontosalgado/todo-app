import React, { useContext, useState } from "react";
import { Button, FlatList } from "react-native";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoItem } from "../TodoItem/TodoItem";
import * as S from "./TodoList.styles";

const TodoList = () => {
  const context = useContext(TodoContext);
  if (!context) {
    return null;
  }
  const { todos, updateTodo, deleteTodo, addTodo } = context;
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <S.Container>
      <S.AddContainer>
        <S.TitleText>To-Do List</S.TitleText>
        <S.Input
          placeholder="Adicionar novo item..."
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
        />
        <Button title="Adicionar" onPress={handleAddTodo} />
      </S.AddContainer>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onEdit={updateTodo} onDelete={deleteTodo} />
        )}
        contentContainerStyle={S.ListContent}
      />
    </S.Container>
  );
};

export { TodoList };
