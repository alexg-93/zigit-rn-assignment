import { useCallback,Dispatch,SetStateAction } from 'react';
import { Task } from '../types/todo.types';

/**
 * Custom hook that provides a function to toggle the completed status of a task.
 *
 * @param tasks The current array of tasks.
 * @param setTasks The function to update the tasks state.
 * @returns An object with the toggleComplete function that takes a taskId as a parameter
 * and toggles the completed status of the corresponding task.
 */
export const useToggleCompleteTask = (
  tasks: Task[],
  setTasks: Dispatch<SetStateAction<Task[]>>
) => {
  const toggleComplete = useCallback(
    (taskId: string) => {
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [tasks, setTasks]
  );

  return { toggleComplete };
};