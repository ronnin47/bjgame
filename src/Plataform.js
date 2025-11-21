// src/Platform.js
import React from 'react';
import { View } from 'react-native';

export default function Platform({ position, size }) {
  const [x, y] = position;
  const [width, height] = size;

  return (
    <View
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        backgroundColor: 'green'
      }}
    />
  );
}