import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

export const EmptyListComponent = () => {
    return (
            <View style={styles.container}>
                <Text style={styles.title}>{"No Tasks yet.."}</Text>
            </View>
    );
}

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
})

