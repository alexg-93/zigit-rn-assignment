export type ThemeType = 'light' | 'dark';

export interface Theme {
  background: string;
  text: string;
  primary: string;
  secondary: string;
  border: string;
  error: string;
  card: string;
  shadow: string;
}

export interface UseTheme {
  theme: ThemeType;
  toggleTheme: () => void;
  colors: Theme;
} 