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
      score:0,
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
      score:0,
      gamesPlayed: 0
    },
}; 
};

export const removePlayerNameP1 = () => {
  return {
    type: "DELPLAYERNAMEP1",
}; 
};

export const removePlayerNameP2 = () => {
  return {
    type: "DELPLAYERNAMEP2",
}; 
};


export const shufflePlayerName = () => {
  return {
    type: "SHUFFPLAYERNAME",
}; 
};

export const addRound1Results = (valueR1,r2Pairs) => {
  return {
    type: "ADDR1RESULTS",
      resultsR1: valueR1,
      r2Pairs: r2Pairs,
}; 
};

export const addRound2Results = (valueR2,r3Pairs) => {
  return {
    type: "ADDR2RESULTS",
      resultsR2: valueR2,
      r3Pairs: r3Pairs,
}; 
};

export const addRound3Results = (valueR3,winner) => {
  return {
    type: "ADDR3RESULTS",
      resultsR3: valueR3,
      winner: winner,
}; 
};

export const captureR1 = () => {
  return {
    type: "R1CAPTURESTATE",
}; 
};

