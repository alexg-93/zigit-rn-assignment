import { useState } from 'react';
import { router } from 'expo-router';
import { mockAuthService } from '../services/mockAuthService';
import { UseRegistrationHook, RegistrationFormState } from '../types/auth.types';

// custom hook for registration

export const useRegistration = (): UseRegistrationHook => {
  const [formState, setFormState] = useState<RegistrationFormState>({
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

  const validateInputs = () => {
    if (!formState.email || !formState.password) {
      setErrorMessage('All fields are required');
      return false;
    }
    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setErrorMessage('Please enter a valid email');
      return false;
    }
    if (formState.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    setErrorMessage('');
    if (!validateInputs()) return;

    const result = await mockAuthService.register(formState.email, formState.password);
    if (result.success) {
      router.push('/login');
    } else {
      setErrorMessage(result.message || 'Registration failed');
    }
  };

  return {
    ...formState,
    setEmail,
    setPassword,
    setShowPassword,
    setFocusedInput,
    handleRegister,
  };
}; 