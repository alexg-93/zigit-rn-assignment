import { useCallback,Dispatch,SetStateAction } from 'react';
import { Task } from '../types/todo.types';

/**
 * Custom hook that provides a function to delete a task from the task list.
 *
 * @param tasks The current array of tasks.
 * @param setTasks The function to update the tasks state.
 * @returns An object with the deleteTask function that takes a taskId as a parameter
 * and removes the corresponding task from the task list.
 */

export const useDeleteTask = (
  tasks: Task[],
  setTasks: Dispatch<SetStateAction<Task[]>>
) => {
  const deleteTask = useCallback(
    (taskId: string) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    },
    [tasks, setTasks]
  );

  return { deleteTask };
};