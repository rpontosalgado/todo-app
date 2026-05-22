import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { DeleteConfirmModal } from './DeleteConfirmModal';

describe('DeleteConfirmModal', () => {
  const mockConfirm = jest.fn();
  const mockCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render modal content when visible', () => {
    const { getByText } = render(
      <DeleteConfirmModal visible onConfirm={mockConfirm} onCancel={mockCancel} />,
    );

    expect(getByText('Confirmar exclusão')).toBeTruthy();
    expect(getByText('Tem certeza que deseja remover esta tarefa?')).toBeTruthy();
  });

  it('should call onConfirm on Remover press', () => {
    const { getByText } = render(
      <DeleteConfirmModal visible onConfirm={mockConfirm} onCancel={mockCancel} />,
    );

    fireEvent.press(getByText('Remover'));

    expect(mockConfirm).toHaveBeenCalled();
  });

  it('should call onCancel on Cancelar press', () => {
    const { getByText } = render(
      <DeleteConfirmModal visible onConfirm={mockConfirm} onCancel={mockCancel} />,
    );

    fireEvent.press(getByText('Cancelar'));

    expect(mockCancel).toHaveBeenCalled();
  });
});
