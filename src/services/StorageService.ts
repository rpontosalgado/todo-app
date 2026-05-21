import AsyncStorage from "@react-native-async-storage/async-storage";
import { Todo } from "../types";

const STORAGE_KEY = "@todo_list_v1";

export const StorageService = {
  saveTodos: async (todos: Todo[]): Promise<void> => {
    try {
      const json = JSON.stringify(todos);
      await AsyncStorage.setItem(STORAGE_KEY, json);
    } catch (error) {
      console.error("Error saving todos:", error);
    }
  },

  loadTodos: async (): Promise<Todo[]> => {
    try {
      const json = await AsyncStorage.getItem(STORAGE_KEY);
      return json ? JSON.parse(json) : [];
    } catch (error) {
      console.error("Error loading todos:", error);
      return [];
    }
  },
};
