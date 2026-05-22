import React from "react";
import { render } from "@testing-library/react-native";
import { EmptyState } from "./EmptyState";

describe("EmptyState", () => {
  it("should render empty state message", () => {
    const { getByText } = render(<EmptyState />);

    expect(getByText("Nenhuma tarefa")).toBeTruthy();
  });

  it("should render call to action", () => {
    const { getByText } = render(<EmptyState />);

    expect(
      getByText("Adicione uma nova tarefa usando o campo acima."),
    ).toBeTruthy();
  });
});
