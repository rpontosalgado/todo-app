jest.mock("@react-native-async-storage/async-storage", () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));

import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TodoList } from "./TodoList";
import { TodoContext } from "../../contexts/TodoContext";

const mockContextValue = {
  todos: [
    { id: "1", name: "First", createdAt: 1000 },
    { id: "2", name: "Second", createdAt: 2000 },
  ],
  addTodo: jest.fn(),
  updateTodo: jest.fn(),
  deleteTodo: jest.fn(),
};

const renderWithContext = (contextValue = mockContextValue) =>
  render(
    <TodoContext.Provider value={contextValue}>
      <TodoList />
    </TodoContext.Provider>,
  );

describe("TodoList", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the title", () => {
    const { getByText } = renderWithContext();

    expect(getByText("To-Do List")).toBeTruthy();
  });

  it("should render the input field", () => {
    const { getByPlaceholderText } = renderWithContext();

    expect(getByPlaceholderText("Adicionar novo item...")).toBeTruthy();
  });

  it("should render the add button", () => {
    const { getByText } = renderWithContext();

    expect(getByText("Adicionar")).toBeTruthy();
  });

  it("should render todo items for each todo", () => {
    const { getByText } = renderWithContext();

    expect(getByText("First")).toBeTruthy();
    expect(getByText("Second")).toBeTruthy();
  });

  it("should call addTodo and clear input on submit", () => {
    const { getByText, getByPlaceholderText } = renderWithContext();
    const input = getByPlaceholderText("Adicionar novo item...");

    fireEvent.changeText(input, "New todo");
    fireEvent.press(getByText("Adicionar"));

    expect(mockContextValue.addTodo).toHaveBeenCalledWith("New todo");
    expect(input.props.value).toBe("");
  });

  it("should call addTodo on submit editing", () => {
    const { getByPlaceholderText } = renderWithContext();
    const input = getByPlaceholderText("Adicionar novo item...");

    fireEvent.changeText(input, "New todo");
    fireEvent(input, "onSubmitEditing");

    expect(mockContextValue.addTodo).toHaveBeenCalledWith("New todo");
  });

  it("should not call addTodo with empty input", () => {
    const { getByText } = renderWithContext();

    fireEvent.press(getByText("Adicionar"));

    expect(mockContextValue.addTodo).not.toHaveBeenCalled();
  });

  it("should not call addTodo with whitespace input", () => {
    const { getByText, getByPlaceholderText } = renderWithContext();
    const input = getByPlaceholderText("Adicionar novo item...");

    fireEvent.changeText(input, "   ");
    fireEvent.press(getByText("Adicionar"));

    expect(mockContextValue.addTodo).not.toHaveBeenCalled();
  });

  it("should render null when context is missing", () => {
    const { toJSON } = render(<TodoList />);

    expect(toJSON()).toBeNull();
  });
});
