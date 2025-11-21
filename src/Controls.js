import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Controls({ onMove }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onMove(-5)}>
        <Text>⬅️</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onMove(5)}>
        <Text>➡️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    position: 'absolute', 
    bottom: 50, 
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20,
  },
  button: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
});