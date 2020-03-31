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
    type: "ADDPLAYERNAME",
      playerName: valueP,
}; 
};
