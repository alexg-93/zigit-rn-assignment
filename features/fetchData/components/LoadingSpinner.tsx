import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export const LoadingSpinner = () => {
    return (
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="#6200ee" animating={true} />
        </View>
    );
}


const styles = StyleSheet.create({
    spinnerContainer: {
       position: 'absolute',
       top: '50%',
       left: '50%'
      },
})