import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useLogout } from '@/features/auth/hooks/useLogout';
import { useTheme } from '@/features/settings/hooks/useTheme';
import { StatusBar } from 'expo-status-bar';

export default function TabsLayout() {
  const { handleLogout } = useLogout();
  const { colors, theme } = useTheme();

  return (
    <>
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTitleStyle: {
            color: colors.text,
          },
          headerRight: () => (
            <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
              <Ionicons name="log-out-outline" size={24} color={colors.primary} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => {
            let iconName: 'checkbox-outline' | 'list-outline' | 'stats-chart' | 'settings-outline' | undefined;
            if (route.name === 'todo') {
              iconName = 'checkbox-outline';
            } else if (route.name === 'data') {
              iconName = 'list-outline';
            } else if (route.name === 'dashboard') {
              iconName = 'stats-chart';
            } else if (route.name === 'settings') {
              iconName = 'settings-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.secondary,
          tabBarStyle: {
            backgroundColor: colors.background,
            borderTopColor: colors.border,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
          },
        })}
      >
        <Tabs.Screen name="todo" options={{ title: 'ToDoList' , headerTitle: '' }} />
        <Tabs.Screen name="data" options={{ title: 'DataFetch' , headerShown: false }}/>
        <Tabs.Screen name="dashboard" options={{ title: 'Dashboard' , headerShown: false }} />
        <Tabs.Screen name="settings" options={{ title: 'Settings' , headerShown: false }} />
      </Tabs>
    </>
  );
}
