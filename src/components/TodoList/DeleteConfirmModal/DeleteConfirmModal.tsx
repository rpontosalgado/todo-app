import React from 'react';
import { Button, Modal } from 'react-native';
import * as S from './DeleteConfirmModal.styles';

interface DeleteConfirmModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmModal = ({ visible, onConfirm, onCancel }: DeleteConfirmModalProps) => (
  <Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
    <S.Overlay>
      <S.Content>
        <S.Title>Confirmar exclusão</S.Title>
        <S.Text>Tem certeza que deseja remover esta tarefa?</S.Text>
        <S.Buttons>
          <Button title="Cancelar" onPress={onCancel} color="#999" />
          <Button title="Remover" onPress={onConfirm} color="#f44336" />
        </S.Buttons>
      </S.Content>
    </S.Overlay>
  </Modal>
);

export { DeleteConfirmModal };
