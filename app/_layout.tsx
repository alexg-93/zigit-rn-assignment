import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import ToDoListScreen from '../features/todo/screens/ToDoListScreen';
import DataScreen from '@/features/fetchData/screens/DataScreen';

const Tab = createBottomTabNavigator();

export default function RootLayout() {

  return (
 
    <PaperProvider>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName: 'checkbox-outline' | 'list-outline' | undefined;
            if (route.name === 'ToDoList') {
              iconName = 'checkbox-outline';
            } else if (route.name === 'DataFetch') {
              iconName = 'list-outline';
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
   
        <Tab.Screen name="ToDoList" component={ToDoListScreen} />
        <Tab.Screen name="DataFetch" component={DataScreen} />
      </Tab.Navigator>
    </PaperProvider>
  );
}
