import { StorageService } from './StorageService';
import { Todo } from '../types';

describe('StorageService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should save and load todos', async () => {
    const todos: Todo[] = [
      {
        id: '1',
        name: 'Test todo',
        createdAt: Date.now(),
      },
    ];

    await StorageService.saveTodos(todos);
    const loadedTodos = await StorageService.loadTodos();

    expect(loadedTodos).toEqual(todos);
  });

  it('should return empty array when no todos saved', async () => {
    const loadedTodos = await StorageService.loadTodos();

    expect(loadedTodos).toEqual([]);
  });
});
