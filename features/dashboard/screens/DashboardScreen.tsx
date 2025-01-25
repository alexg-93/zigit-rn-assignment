import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDashboardStats } from '../hooks/useDashboardStats';
import { StatCard } from '../components/StatCard';

export default function DashboardScreen() {

  const { stats, isLoading, refreshStats } = useDashboardStats();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2A004E" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refreshStats} />
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>{'Tasks Overview'}</Text>
        <Text style={styles.subtitle}>{'Your task statistics'}</Text>
      </View>

      <View style={styles.statsContainer}>
        <StatCard
          title="Total Tasks"
          value={stats.total}
          icon="list"
          color="#2A004E"
        />
        <StatCard
          title="Completed"
          value={stats.completed}
          icon="checkmark-circle"
          color="#4CAF50"
        />
        <StatCard
          title="Pending"
          value={stats.pending}
          icon="time"
          color="#FFA000"
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2A004E',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  statsContainer: {
    paddingHorizontal: 40,
    flexDirection: 'column',
    gap: 10,
  },
});
