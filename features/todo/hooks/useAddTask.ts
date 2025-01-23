import { useCallback,Dispatch,SetStateAction } from 'react';
import { Task } from '../types/todo.types';

  /**
   * custom hook that adds a new task to the state.
   *
   * @param tasks The current tasks.
   * @param setTasks The function to update the tasks state.
   * @returns An object with the addTask function.
   */

  
export const useAddTask = (
  tasks: Task[],
  setTasks: Dispatch<SetStateAction<Task[]>>
) => {
  
  const addTask = useCallback((text: string) => {
      if (!text.trim()) return;
      const newTask: Task = {
        id: Date.now().toString(),
        title: text.trim(),
        completed: false,
      };
      setTasks([...tasks, newTask]);
    },[tasks, setTasks]
  );

  return { addTask };
};