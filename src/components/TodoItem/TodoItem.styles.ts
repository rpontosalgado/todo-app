import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  margin: 8px 16px;
`

export const Label = styled.Text`
  font-size: 14px;
  color: #888;
`

export const Input = styled.TextInput`
  padding: 12px;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
`

export const Date = styled.Text`
  font-size: 12px;
  color: #888;
`

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
