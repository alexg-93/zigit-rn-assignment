import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DataItemProps } from '../types/data.types';


const Item = ({ item } : DataItemProps) => {

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  body: {
    color: '#555',
    marginTop: 5,
  },
});

export default Item;