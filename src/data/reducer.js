import initial from '../data/initial';


const counterIncrease = state => ({ ...state, count: state.count + 1 });
 
const pList = (state,{playerName}) => ({ ...state, playersList: state.playersList.concat(playerName)})

const pListDel = (state) => ({ ...state, playersList: state.playersList.slice(0, -1)})

const shuffle = arr => arr.sort(() => Math.random() - 0.5);
const pListShuff = (state) => ({ ...state, playersList: shuffle(state.playersList)})





export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state);
        case "SHUFFPLAYERNAME": return pListShuff(state); 
        case "ADDPLAYERNAME": return pList(state, action);
        case "DELPLAYERNAME": return pListDel(state);  
        case "RESET": return initial;
        default: return state;
        }
    };


// const shuffle = arr => arr.sort(() => Math.random() - 0.5);


// const shuffleArray2 = arr => arr
//       .map(a => [Math.random(), a])
//       .sort((a, b) => a[0] - b[0])
//       .map(a => a[1]);




// const pListShuff = (state,initial) => {
//     const newplayersList = (...state.playersList,shuffle())
//     return {
//         ...initial,
//         playersList:newplayersList,
//     }
// }

