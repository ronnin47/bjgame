import React from 'react';
import { Image } from 'react-native';


//este componente tarta del personaje y recibe la posicion
export default function Player({ position }) {
  const [x, y] = position;

  return (
    <Image
      source={{ uri: 'https://res.cloudinary.com/dzul1hatw/image/upload/v1761959042/personajes/personaje_1271.jpg' }} // reemplazá con tu URL
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: 50,
        height: 50,
      }}
    />
  );
}