import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const EmptyListComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"No result to display..."}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
