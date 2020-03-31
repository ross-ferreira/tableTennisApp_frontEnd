import initial from '../data/initial';


const counterIncrease = state => ({ ...state, count: state.count + 1 });
  
const pName = (state,{playerName}) => ({ ...state, playerName: playerName + state.playerName});

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state); 
        case "RESET": return initial;
        case "ADDPLAYERNAME": return pName(state, action);  
        default: return state;
        }
    };


  