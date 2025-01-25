import { useState, useEffect, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { TaskStats, UseDashboardStats } from '../types/dashboard.types';
import { loadTasks } from '@/features/todo/utils/storage';

export const useDashboardStats = (): UseDashboardStats => {
    
  const [stats, setStats] = useState<TaskStats>({
    total: 0,
    completed: 0,
    pending: 0
  });
  const [isLoading, setIsLoading] = useState<UseDashboardStats['isLoading']>(true);

  const calculateStats = async () => {
    try {

      setIsLoading(true);
      const tasks = await loadTasks();
      const total = tasks.length;
      const completed = tasks.filter((task: any) => task.completed).length;
      const pending = total - completed;

      setStats({
        total,
        completed,
        pending
      });

    } catch (error) {
      console.error('Error calculating stats:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Refresh stats when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      calculateStats();
    }, [])
  );

  // Initial load
  useEffect(() => {
    calculateStats();
  }, []);

  return {
    stats,
    isLoading,
    refreshStats: calculateStats,
  };
}; 