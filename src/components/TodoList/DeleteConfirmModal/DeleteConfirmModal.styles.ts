import styled from 'styled-components/native';

export const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.View`
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 80%;
  max-width: 320px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  gap: 12px;
`;
