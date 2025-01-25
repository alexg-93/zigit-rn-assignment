import { router } from 'expo-router';
import { mockAuthService } from '../services/mockAuthService';

export const useLogout = () => {
  const handleLogout = async () => {
    await mockAuthService.logout();
    router.replace('/login');
  };

  return { handleLogout };
}; 