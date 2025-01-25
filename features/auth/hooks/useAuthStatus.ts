import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStatus } from '../types/auth.types';


export const useAuthStatus = () => {
    
  const [isAuthenticated, setIsAuthenticated] = useState<AuthStatus['isAuthenticated']>(null);
  const [isLoading, setIsLoading] = useState<AuthStatus['isLoading']>(true);

  const checkAuthStatus = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      setIsAuthenticated(!!user);
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Show loading indicator only for initial load (max 2 seconds)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return {
    isAuthenticated,
    isLoading,
  };
}; 