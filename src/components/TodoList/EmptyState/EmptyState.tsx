import React from "react";
import * as S from "./EmptyState.styles";

const EmptyState = () => (
  <S.Container>
    <S.Icon>📋</S.Icon>
    <S.Title>Nenhuma tarefa</S.Title>
    <S.Description>
      Adicione uma nova tarefa usando o campo acima.
    </S.Description>
  </S.Container>
);

export { EmptyState };
