import React from "react";
import { renderHook, act, waitFor } from "@testing-library/react-native";
import { TodoProvider, useTodoContext } from "./TodoContext";
import { StorageService } from "../services/StorageService";

jest.mock("../services/StorageService", () => ({
  StorageService: {
    saveTodos: jest.fn(),
    loadTodos: jest.fn(),
  },
}));

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <TodoProvider>{children}</TodoProvider>
);

describe("TodoContext", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (StorageService.loadTodos as jest.Mock).mockResolvedValue([]);
    (StorageService.saveTodos as jest.Mock).mockResolvedValue(undefined);
  });

  it("should load todos on mount", async () => {
    const storedTodos = [
      { id: "1", name: "Existing", createdAt: 1000 },
    ];
    (StorageService.loadTodos as jest.Mock).mockResolvedValue(storedTodos);

    const { result } = renderHook(() => useTodoContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.todos).toEqual(storedTodos);
    });
    expect(StorageService.loadTodos).toHaveBeenCalledTimes(1);
  });

  it("should start with empty todos when storage is empty", async () => {
    const { result } = renderHook(() => useTodoContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.todos).toEqual([]);
    });
  });

  it("should add a todo", async () => {
    const { result } = renderHook(() => useTodoContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.todos).toEqual([]);
    });

    await act(async () => {
      result.current.addTodo("Buy milk");
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].name).toBe("Buy milk");
    expect(result.current.todos[0].id).toEqual(expect.any(String));
    expect(result.current.todos[0].createdAt).toEqual(expect.any(Number));
    expect(StorageService.saveTodos).toHaveBeenCalledWith(
      result.current.todos,
    );
  });

  it("should append new todo to existing todos", async () => {
    const storedTodos = [
      { id: "1", name: "First", createdAt: 1000 },
    ];
    (StorageService.loadTodos as jest.Mock).mockResolvedValue(storedTodos);

    const { result } = renderHook(() => useTodoContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.todos).toEqual(storedTodos);
    });

    await act(async () => {
      result.current.addTodo("Second");
    });

    expect(result.current.todos).toHaveLength(2);
    expect(result.current.todos[0].name).toBe("First");
    expect(result.current.todos[1].name).toBe("Second");
  });

  it("should update a todo by id", async () => {
    const storedTodos = [
      { id: "1", name: "Old name", createdAt: 1000 },
      { id: "2", name: "Keep me", createdAt: 2000 },
    ];
    (StorageService.loadTodos as jest.Mock).mockResolvedValue(storedTodos);

    const { result } = renderHook(() => useTodoContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.todos).toEqual(storedTodos);
    });

    await act(async () => {
      result.current.updateTodo("1", "New name");
    });

    expect(result.current.todos[0].name).toBe("New name");
    expect(result.current.todos[1].name).toBe("Keep me");
    expect(StorageService.saveTodos).toHaveBeenCalledWith(
      result.current.todos,
    );
  });

  it("should not modify todos when updating non-existent id", async () => {
    const storedTodos = [
      { id: "1", name: "Only one", createdAt: 1000 },
    ];
    (StorageService.loadTodos as jest.Mock).mockResolvedValue(storedTodos);

    const { result } = renderHook(() => useTodoContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.todos).toEqual(storedTodos);
    });

    await act(async () => {
      result.current.updateTodo("999", "Ghost");
    });

    expect(result.current.todos).toEqual(storedTodos);
  });

  it("should delete a todo by id", async () => {
    const storedTodos = [
      { id: "1", name: "Delete me", createdAt: 1000 },
      { id: "2", name: "Keep me", createdAt: 2000 },
    ];
    (StorageService.loadTodos as jest.Mock).mockResolvedValue(storedTodos);

    const { result } = renderHook(() => useTodoContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.todos).toEqual(storedTodos);
    });

    await act(async () => {
      result.current.deleteTodo("1");
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].id).toBe("2");
    expect(StorageService.saveTodos).toHaveBeenCalledWith(
      result.current.todos,
    );
  });

  it("should persist after every mutation", async () => {
    const { result } = renderHook(() => useTodoContext(), { wrapper });

    await waitFor(() => {
      expect(result.current.todos).toEqual([]);
    });

    await act(async () => {
      result.current.addTodo("A");
    });
    expect(StorageService.saveTodos).toHaveBeenCalledTimes(1);

    await act(async () => {
      result.current.deleteTodo(result.current.todos[0].id);
    });
    expect(StorageService.saveTodos).toHaveBeenCalledTimes(2);
  });
});
