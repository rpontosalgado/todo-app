import React from 'react';
import { Button, View } from 'react-native';
import { Todo } from '../../types';
import * as S from './TodoItem.styles';

interface TodoItemProps {
  todo: Todo;
  onEdit: (id: string, name: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onEdit, onDelete }: TodoItemProps) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editName, setEditName] = React.useState(todo.name);

  const handleSave = () => {
    if (editName.trim()) {
      onEdit(todo.id, editName);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditName(todo.name);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <S.Container>
        <S.LabelText>Editar:</S.LabelText>
        <S.Input value={editName} onChangeText={setEditName} onBlur={handleSave} autoFocus />
        <S.ButtonContainer>
          <Button title="Salvar" onPress={handleSave} />
          <Button title="Cancelar" onPress={handleCancel} color="#999" />
        </S.ButtonContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Header>
        <View>
          <S.Name>{todo.name}</S.Name>
          <S.Date>{new Date(todo.createdAt).toLocaleDateString('pt-BR')}</S.Date>
        </View>
      </S.Header>
      <S.Buttons>
        <Button title="Editar" onPress={() => setIsEditing(true)} />
        <Button title="Remover" onPress={() => onDelete(todo.id)} color="#f44336" />
      </S.Buttons>
    </S.Container>
  );
};

export { TodoItem };
