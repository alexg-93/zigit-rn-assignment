import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, AuthResponse } from '../types/auth.types';

const USERS_KEY = 'users';

/**
 * Reads user data from AsyncStorage
 * @returns {Promise<{users: Array}>} Object containing array of users, or empty array if no data exists
 */
const readUserData = async (): Promise<{ users: User[] }> => {
  const data = await AsyncStorage.getItem(USERS_KEY);
  return data ? JSON.parse(data) : { users: [] };
};

/**
 * Writes user data to AsyncStorage
 * @param {any} data - User data to write
 * @returns {Promise<void>}
 */
const writeUserData = async (data: { users: User[] }): Promise<void> => {
  await AsyncStorage.setItem(USERS_KEY, JSON.stringify(data));
};

/**
 * Mock authentication service for handling user authentication
 */
export const mockAuthService = {
  /**
   * Authenticates a user with email and password
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<{success: boolean, user?: {email: string}, message?: string}>} 
   */
  login: async (email: string, password: string): Promise<AuthResponse> => {
    const data = await readUserData();
    const user = data.users.find(user => user.email === email && user.password === password);
    if (user) {
      await AsyncStorage.setItem('user', JSON.stringify({ email }));
      return { success: true, user: { email } };
    }
    return { success: false, message: 'Invalid credentials' };
  },

  /**
   * Registers a new user
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @returns {Promise<{success: boolean, user?: {email: string}, message?: string}>}
   */
  register: async (email: string, password: string): Promise<AuthResponse> => {
    const data = await readUserData();
    const userExists = data.users.some(user => user.email === email);
    if (userExists) {
      return { success: false, message: 'User already exists' };
    }
    data.users.push({ email, password });
    await writeUserData(data);
    await AsyncStorage.setItem('user', JSON.stringify({ email }));
    return { success: true, user: { email } };
  },

  /**
   * Logs out the current user
   * @returns {Promise<{success: boolean}>}
   */
  logout: async (): Promise<AuthResponse> => {
    await AsyncStorage.removeItem('user');
    return { success: true };
  },
}; 