import React from 'react';
import { render } from '@testing-library/react-native';
import { LoadingView } from './LoadingView';

describe('LoadingView', () => {
  it('should render loading text', () => {
    const { getByText } = render(<LoadingView />);

    expect(getByText('Carregando...')).toBeTruthy();
  });
});
