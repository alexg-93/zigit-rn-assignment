import { useState, useEffect } from 'react';
import { loadTasks, saveTasks } from '../utils/storage';
import { Task } from '../types/todo.types';

  /**
   * Custom hook that Loads tasks from storage when the component mounts, and saves the tasks to
   * storage whenever the tasks change.
   *
   * @returns An object with the tasks and a setTasks function to update the tasks.
   */
export const useLoadTasks = () => {
    
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      setTasks(storedTasks);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return { tasks, setTasks };
};