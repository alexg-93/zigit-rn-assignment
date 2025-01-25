export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
}

export interface UseDashboardStats {
  stats: TaskStats;
  isLoading: boolean;
  refreshStats: () => Promise<void>;
} 

export interface StatCardProps {
    title: string;
    value: number;
    icon: string;
    color: string;
  }