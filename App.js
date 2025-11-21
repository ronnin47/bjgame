
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//motor grafico
import { GameEngine } from 'react-native-game-engine';
import Player from './src/Player';
import Physics  from './src/Fisicas.js'
import Controls from './src/Controls';







export default function App() {





  const [entities, setEntities] = React.useState({
  player: { position: [50, 50], renderer: <Player /> },
  ground: { position: [0, 400], size: [400, 50], renderer: <Platform /> }, // plataforma
});
  const handleMove = (dx) => {
    setEntities(prev => {
      let player = { ...prev.player };
      player.position[0] += dx;
      return { ...prev, player };
    });
  };




  return (
   <View style={styles.container}>


      <GameEngine
        style={styles.container}
        systems={[Physics]}
        entities={entities}
      />
    
      <Controls onMove={handleMove} />
    
    
    
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000ad' }, // cielo
});
