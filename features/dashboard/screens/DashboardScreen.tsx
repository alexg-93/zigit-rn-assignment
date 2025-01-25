import React, { useCallback } from 'react';
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
import { useTheme } from '@/features/settings/hooks/useTheme';

export default function DashboardScreen() {
    
  const { stats, isLoading, refreshStats } = useDashboardStats();
  const { colors } = useTheme();

  const renderContent = useCallback(() => {
    if (isLoading) {
      return (
        <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      );
    }

    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl 
            refreshing={isLoading} 
            onRefresh={refreshStats}
            tintColor={colors.primary}
          />
        }
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Tasks Overview</Text>
          <Text style={[styles.subtitle, { color: colors.secondary }]}>Your task statistics</Text>
        </View>

        <View style={styles.statsContainer}>
          <StatCard
            title="Total Tasks"
            value={stats.total}
            icon="list"
            color={colors.primary}
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
    );
  }, [colors, isLoading, refreshStats, stats]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.container}>
        {renderContent()}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
  },
  statsContainer: {
    paddingHorizontal: 40,
    flexDirection: 'column',
    gap: 10,
  },
});
