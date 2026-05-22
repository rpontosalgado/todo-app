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
  loading: false,
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

  it("should show delete confirmation modal on Remover press", () => {
    const { getAllByText, getByText, queryByText } = renderWithContext();

    fireEvent.press(getAllByText("Remover")[0]);

    expect(getByText("Confirmar exclusão")).toBeTruthy();
    expect(queryByText("Cancelar")).toBeTruthy();
  });

  it("should delete todo on modal confirmation", () => {
    const { getAllByText } = renderWithContext();

    fireEvent.press(getAllByText("Remover")[0]);

    const removeButtons = getAllByText("Remover");
    const modalRemoveButton = removeButtons[removeButtons.length - 1];
    fireEvent.press(modalRemoveButton);

    expect(mockContextValue.deleteTodo).toHaveBeenCalledWith("1");
  });

  it("should cancel delete when dismissing modal", () => {
    const { getAllByText, getByText, queryByText } = renderWithContext();

    fireEvent.press(getAllByText("Remover")[0]);
    fireEvent.press(getByText("Cancelar"));

    expect(mockContextValue.deleteTodo).not.toHaveBeenCalled();
    expect(queryByText("Confirmar exclusão")).toBeNull();
  });

  it("should disable add button when input is empty", () => {
    const { getByText } = renderWithContext();
    const button = getByText("Adicionar");

    expect(button.props.disabled).toBe(true);
  });

  it("should enable add button when input has text", () => {
    const { getByText, getByPlaceholderText } = renderWithContext();
    const input = getByPlaceholderText("Adicionar novo item...");

    fireEvent.changeText(input, "New todo");
    const button = getByText("Adicionar");

    expect(button.props.disabled).toBe(false);
  });
});
