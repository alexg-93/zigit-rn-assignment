import { View } from 'react-native';
import { Redirect } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { useAuthStatus } from '@/features/auth/hooks/useAuthStatus';

export default function Index() {

  const { isAuthenticated, isLoading } = useAuthStatus();

  if (isLoading && isAuthenticated === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2A004E" />
      </View>
    );
  }

  // Default to non-authenticated state if there's an error or timeout
  return <Redirect href={isAuthenticated ? "/(tabs)/todo" : "/login"} />;
}
