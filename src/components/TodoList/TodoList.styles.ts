import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f0;
  padding: 16px;
`;

export const AddContainer = styled.View`
  margin-bottom: 20px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Input = styled.TextInput`
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const ListContent = {
  paddingBottom: 16,
  flexGrow: 1,
};

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  font-size: 16px;
  color: #888;
  margin-top: 12px;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export const EmptyTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #888;
  margin-bottom: 8px;
`;

export const EmptyText = styled.Text`
  font-size: 14px;
  color: #999;
  text-align: center;
`;

export const EmptyIcon = styled.Text`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 80%;
  max-width: 320px;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const ModalText = styled.Text`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalButtons = styled.View`
  flex-direction: row;
  gap: 12px;
`;
