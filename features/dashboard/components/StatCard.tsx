import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatCardProps } from '../types/dashboard.types';
import { useTheme } from '@/features/settings/hooks/useTheme';

export const StatCard = ({ title, value, icon, color }: StatCardProps) => {
  const { colors } = useTheme();
  
  return (
    <View style={[
      styles.card, 
      { 
        backgroundColor: colors.card,
        borderLeftColor: color,
        shadowColor: colors.shadow,
      }
    ]}>
      <View style={styles.cardIcon}>
        <Ionicons name={icon as any} size={24} color={color} />
      </View>
      <View style={styles.cardContent}>
        <Text style={[styles.cardTitle, { color: colors.secondary }]}>{title}</Text>
        <Text style={[styles.cardValue, { color }]}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderLeftWidth: 5,
  },
  cardIcon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    marginBottom: 5,
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 