import { useState } from 'react';
import { router } from 'expo-router';
import { mockAuthService } from '../services/mockAuthService';
import { UseLoginHook, LoginFormState } from '../types/auth.types';

// custom hook for login

export const useLogin = (): UseLoginHook => {
  const [formState, setFormState] = useState<LoginFormState>({
    email: '',
    password: '',
    errorMessage: '',
    showPassword: false,
    focusedInput: null,
  });

  const setEmail = (email: string) => setFormState(prev => ({ ...prev, email }));
  const setPassword = (password: string) => setFormState(prev => ({ ...prev, password }));
  const setErrorMessage = (errorMessage: string) => setFormState(prev => ({ ...prev, errorMessage }));
  const setShowPassword = (showPassword: boolean) => setFormState(prev => ({ ...prev, showPassword }));
  const setFocusedInput = (focusedInput: 'email' | 'password' | null) => 
    setFormState(prev => ({ ...prev, focusedInput }));

  const handleLogin = async () => {
    setErrorMessage('');
    
    if (!formState.email || !formState.password) {
      setErrorMessage('All fields are required');
      return;
    }

    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setErrorMessage('Please enter a valid email');
      return;
    }

    if (formState.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return;
    }

    const result = await mockAuthService.login(formState.email, formState.password);
    if (result.success) {
      router.push('/(tabs)/todo');
    } else {
      setErrorMessage(result.message || 'Login failed');
    }
  };

  return {
    ...formState,
    setEmail,
    setPassword,
    setShowPassword,
    setFocusedInput,
    handleLogin,
  };
}; 