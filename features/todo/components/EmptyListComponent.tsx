import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/features/settings/hooks/useTheme';

export const EmptyListComponent = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.secondary }]}>
        {`No tasks yet. Add a new task to get started!`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

