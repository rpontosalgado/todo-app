import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { TodoItem } from "./TodoItem";

const mockTodo = {
  id: "1",
  name: "Test todo",
  createdAt: 1716321600000,
};

describe("TodoItem", () => {
  const mockEdit = jest.fn();
  const mockDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render todo name and date", () => {
    const { getByText } = render(
      <TodoItem todo={mockTodo} onEdit={mockEdit} onDelete={mockDelete} />,
    );

    expect(getByText("Test todo")).toBeTruthy();
  });

  it("should render edit and delete buttons in display mode", () => {
    const { getByText } = render(
      <TodoItem todo={mockTodo} onEdit={mockEdit} onDelete={mockDelete} />,
    );

    expect(getByText("Editar")).toBeTruthy();
    expect(getByText("Remover")).toBeTruthy();
  });

  it("should enter edit mode on Editar press", () => {
    const { getByText, queryByText } = render(
      <TodoItem todo={mockTodo} onEdit={mockEdit} onDelete={mockDelete} />,
    );

    fireEvent.press(getByText("Editar"));

    expect(getByText("Salvar")).toBeTruthy();
    expect(getByText("Cancelar")).toBeTruthy();
    expect(queryByText("Editar")).toBeNull();
    expect(queryByText("Remover")).toBeNull();
  });

  it("should call onEdit with new name on Salvar press", () => {
    const { getByText, getByDisplayValue } = render(
      <TodoItem todo={mockTodo} onEdit={mockEdit} onDelete={mockDelete} />,
    );

    fireEvent.press(getByText("Editar"));
    fireEvent.changeText(getByDisplayValue("Test todo"), "Updated name");
    fireEvent.press(getByText("Salvar"));

    expect(mockEdit).toHaveBeenCalledWith("1", "Updated name");
  });

  it("should not call onEdit when saving empty text", () => {
    const { getByText, getByDisplayValue } = render(
      <TodoItem todo={mockTodo} onEdit={mockEdit} onDelete={mockDelete} />,
    );

    fireEvent.press(getByText("Editar"));
    fireEvent.changeText(getByDisplayValue("Test todo"), "   ");
    fireEvent.press(getByText("Salvar"));

    expect(mockEdit).not.toHaveBeenCalled();
  });

  it("should cancel edit and restore original name", () => {
    const { getByText, getByDisplayValue } = render(
      <TodoItem todo={mockTodo} onEdit={mockEdit} onDelete={mockDelete} />,
    );

    fireEvent.press(getByText("Editar"));
    fireEvent.changeText(getByDisplayValue("Test todo"), "Changed");
    fireEvent.press(getByText("Cancelar"));

    expect(mockEdit).not.toHaveBeenCalled();
    expect(getByText("Test todo")).toBeTruthy();
  });

  it("should call onDelete on Remover press", () => {
    const { getByText } = render(
      <TodoItem todo={mockTodo} onEdit={mockEdit} onDelete={mockDelete} />,
    );

    fireEvent.press(getByText("Remover"));

    expect(mockDelete).toHaveBeenCalledWith("1");
  });
});
