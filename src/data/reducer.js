import initial from '../data/initial';


const counterIncrease = state => ({ ...state, count: state.count + 1 });
  
const pName = (state,{playerName}) => ({ ...state, playerName: playerName });

const pList = (state,{playerName}) => ({ ...state, playersList: state.playersList.concat(playerName)})

const pListDel = (state) => ({ ...state, playersList: state.playersList.slice(0, -1)})

// this.setState({ list: this.state.list.concat(this.state.input)});

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state); 
        case "RESET": return initial;
        case "ADDPLAYERNAME": return pList(pName(state, action),action);;
        case "DELPLAYERNAME": return pListDel(state);  
        default: return state;
        }
    };