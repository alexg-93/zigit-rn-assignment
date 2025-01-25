import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/features/settings/hooks/useTheme';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Index redirect screen */}
        <Stack.Screen name="index" />

      {/* Auth group */}
      <Stack.Screen 
        name="login" 
        options={{ 
          headerShown: false,
          title: 'Login'
        }} 
      />
      <Stack.Screen 
        name="registration" 
        options={{ 
          headerShown: false,
          title: 'Registration'
        }} 
      />

        {/* App group (tabs) */}
        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false,
          }} 
        />
      </Stack>
    </ThemeProvider>
  );
}
