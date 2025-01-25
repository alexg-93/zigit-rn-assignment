import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/features/settings/hooks/useTheme';
import { DataItem } from '../types/data.types';

interface ItemProps {
  item: DataItem;
}

const Item = ({ item }: ItemProps) => {

  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <Text style={[styles.title, { color: colors.text }]}>{item.title}</Text>
      <Text style={[styles.body, { color: colors.secondary }]}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Item;