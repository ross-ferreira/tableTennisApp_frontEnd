export const increaseCounter = () => {
  return {
    type: "INCREMENT",
  }; 
};

export const decreaseCounter = () => {
  return {
    type: "DECREMENT",
  }; 
};

export const reset = () => {
    return {
      type: "RESET",
  }; 
};

export const addPlayerNameP1 = (valueP) => {
  return {
    type: 'ADDPLAYERNAMEP1', 
    playerName: { 
      playerName: valueP,
      gamesWon: 0,
      totalPoints: 0,
      gamesPlayed: 0
    },
}; 
};

export const addPlayerNameP2 = (valueP) => {
  return {
    type: 'ADDPLAYERNAMEP2', 
    playerName: { 
      playerName: valueP,
      gamesWon: 0,
      totalPoints: 0,
      gamesPlayed: 0
    },
}; 
};

export const removePlayerName = () => {
  return {
    type: "DELPLAYERNAME",
}; 
};

export const shufflePlayerName = () => {
  return {
    type: "SHUFFPLAYERNAME",
}; 
};

