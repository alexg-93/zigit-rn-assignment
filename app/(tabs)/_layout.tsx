import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useLogout } from '@/features/auth/hooks/useLogout';

export default function TabsLayout() {
  const { handleLogout } = useLogout();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        headerRight: () => (
          <TouchableOpacity onPress={handleLogout} style={{ marginRight: 15 }}>
            <Ionicons name="log-out-outline" size={24} color="#2A004E" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ color, size }) => {
          let iconName: 'checkbox-outline' | 'list-outline' | 'stats-chart' | undefined;
          if (route.name === 'todo') {
            iconName = 'checkbox-outline';
          } else if (route.name === 'data') {
            iconName = 'list-outline';
          } else if (route.name === 'dashboard') {
            iconName = 'stats-chart';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2A004E',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      })}
    >
      <Tabs.Screen name="todo" options={{ title: 'ToDoList' , headerTitle: '' }} />
      <Tabs.Screen name="data" options={{ title: 'DataFetch' , headerShown: false }}/>
      <Tabs.Screen name="dashboard" options={{ title: 'Dashboard' , headerShown: false }} />
    </Tabs>
  );
}
