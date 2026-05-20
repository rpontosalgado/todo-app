import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Button } from 'react-native';
import { TodoContext } from '../contexts/TodoContext';
import { TodoItem } from './TodoItem';

const TodoList = () => {
  const context = useContext(TodoContext);
  if (!context) {
    return null;
  }
  const { todos, updateTodo, deleteTodo, addTodo } = context;
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.addContainer}>
        <Text style={styles.title}>To-Do List</Text>
        <TextInput
          style={styles.input}
          placeholder="Adicionar novo item..."
          value={newTodo}
          onChangeText={setNewTodo}
          onSubmitEditing={handleAddTodo}
        />
        <Button title="Adicionar" onPress={handleAddTodo} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onEdit={updateTodo} onDelete={deleteTodo} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  addContainer: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  input: {
    padding: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    marginBottom: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 16,
  },
});

export { TodoList };
