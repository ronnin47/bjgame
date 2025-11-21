

export default (entities, { time }) => {


  let player = entities.player;
  player.position[1] += 5; // simple gravedad
  
  
  
  return entities;
};