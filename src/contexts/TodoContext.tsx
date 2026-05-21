import React, { createContext, useState, useEffect, useCallback } from "react";
import { Todo } from "../types";
import { StorageService } from "../services/StorageService";

export interface TodoContextType {
  todos: Todo[];
  addTodo: (name: string) => void;
  updateTodo: (id: string, name: string) => void;
  deleteTodo: (id: string) => void;
}

export const TodoContext = createContext<TodoContextType | undefined>(
  undefined,
);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = useCallback(async () => {
    const storedTodos = await StorageService.loadTodos();
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    loadTodos();
  }, [loadTodos]);

  const addTodo = useCallback(
    async (name: string) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        name,
        createdAt: Date.now(),
      };
      const updatedTodos = [...todos, newTodo];
      await StorageService.saveTodos(updatedTodos);
      setTodos(updatedTodos);
    },
    [todos],
  );

  const updateTodo = useCallback(
    async (id: string, name: string) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, name } : todo,
      );
      await StorageService.saveTodos(updatedTodos);
      setTodos(updatedTodos);
    },
    [todos],
  );

  const deleteTodo = useCallback(
    async (id: string) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      await StorageService.saveTodos(updatedTodos);
      setTodos(updatedTodos);
    },
    [todos],
  );

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
