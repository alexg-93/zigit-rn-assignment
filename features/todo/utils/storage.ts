import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/todo.types';


/**
 * Saves the provided array of tasks to AsyncStorage.
 *
 * @param tasks An array of Task objects to be saved.
 * @throws Will log an error message if the task saving fails.
 */

export const saveTasks = async (tasks: Task[]) => {
  try {
    const tasksJson = JSON.stringify(tasks);
    await AsyncStorage.setItem('@tasks', tasksJson);
  } catch (e) {
    console.error('Failed to save tasks:', e);
  }
};

/**
 * Loads the tasks from AsyncStorage. If the loading fails, will log an error and return an
 * empty array.
 *
 * @returns An array of Task objects loaded from AsyncStorage.
 */
export const loadTasks = async () => {
  try {
    const tasksJson = await AsyncStorage.getItem('@tasks');
    return tasksJson != null ? JSON.parse(tasksJson) : [];
  } catch (e) {
    console.error('Failed to load tasks:', e);
    return [];
  }
};