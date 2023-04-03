import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export function Fab({ onPress }) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 48,
        alignSelf: 'center',
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 28,
        width: 72, // increase width
        height: 72, // increase height
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
});
