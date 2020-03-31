export const increase = () => {
  return {
    type: "INCREMENT",
  }; 
};

export const reset = () => {
    return {
      type: "RESET",
  }; 
};


export const addPlayerName = (valueP) => {
  return {
    type: 'ADDPLAYERNAME', 
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


