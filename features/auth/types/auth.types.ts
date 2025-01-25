export interface User {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: {
    email: string;
  };
  message?: string;
}

export interface LoginFormState {
  email: string;
  password: string;
  errorMessage: string;
  showPassword: boolean;
  focusedInput: 'email' | 'password' | null;
}

export interface RegistrationFormState extends LoginFormState {}

export interface UseLoginHook {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  errorMessage: string;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  focusedInput: 'email' | 'password' | null;
  setFocusedInput: (input: 'email' | 'password' | null) => void;
  handleLogin: () => Promise<void>;
}

export interface UseRegistrationHook extends Omit<UseLoginHook, 'handleLogin'> {
  handleRegister: () => Promise<void>;
} 

export interface AuthStatus {
  isAuthenticated: boolean | null;
  isLoading: boolean;
}