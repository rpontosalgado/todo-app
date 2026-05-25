import { StorageService } from './StorageService';
import { Todo } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
}));

describe('StorageService', () => {
  const mockTodos: Todo[] = [
    {
      id: '1',
      name: 'Test todo',
      createdAt: 1234567890,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should save todos', async () => {
    await StorageService.saveTodos(mockTodos);

    expect(AsyncStorage.setItem).toHaveBeenCalledWith('@todo_list_v1', JSON.stringify(mockTodos));
  });

  it('should load todos list', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(JSON.stringify(mockTodos));

    const loadedTodos = await StorageService.loadTodos();

    expect(loadedTodos).toEqual(mockTodos);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith('@todo_list_v1');
  });

  it('should return empty array when no todos saved', async () => {
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue(null);

    const loadedTodos = await StorageService.loadTodos();

    expect(loadedTodos).toEqual([]);
  });

  it('should handle save todos error gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (AsyncStorage.setItem as jest.Mock).mockRejectedValue(new Error('Storage full'));

    await StorageService.saveTodos(mockTodos);

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error saving todos:', expect.any(Error));
    consoleErrorSpy.mockRestore();
  });

  it('should handle load todos error gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (AsyncStorage.getItem as jest.Mock).mockRejectedValue(new Error('Disk error'));

    const loadedTodos = await StorageService.loadTodos();

    expect(loadedTodos).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error loading todos:', expect.any(Error));
    consoleErrorSpy.mockRestore();
  });

  it('should handle malformed JSON when loading todos', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (AsyncStorage.getItem as jest.Mock).mockResolvedValue('not-valid-json');

    const loadedTodos = await StorageService.loadTodos();

    expect(loadedTodos).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error loading todos:', expect.any(SyntaxError));
    consoleErrorSpy.mockRestore();
  });
});
