import React from "react";
import { ActivityIndicator } from "react-native";
import * as S from "./LoadingView.styles";

const LoadingView = () => (
  <S.Container>
    <ActivityIndicator size="large" color="#007AFF" />
    <S.Text>Carregando...</S.Text>
  </S.Container>
);

export { LoadingView };
