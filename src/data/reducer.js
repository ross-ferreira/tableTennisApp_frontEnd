import initial from '../data/initial';


const counterIncrease = state => ({ ...state, count: state.count + 1 });
  
const pName = (state,{playerName}) => ({ ...state, playerName: playerName });

const pList = (state,{playerName}) => ({ ...state, playersList: state.playersList.concat(playerName)})

// this.setState({ list: this.state.list.concat(this.state.input)});

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state); 
        case "RESET": return initial;
        case "ADDPLAYERNAME": return pList(pName(state, action),action);;  
        default: return state;
        }
    };


  