import initial from '../data/initial';


const counterIncrease = state => ({ ...state, count: state.count + 1 });

const counterDecrease = state => ({ ...state, count: state.count - 1 });
 
const pList = (state,{playerName}) => ({ ...state, playersList: state.playersList.concat(playerName)})

const pListP1 = (state,{playerName}) => ({ ...state, player1List: state.player1List.concat(playerName)})

const pListP2 = (state,{playerName}) => ({ ...state, player2List: state.player2List.concat(playerName)})

const pListDel = (state) => ({ ...state, playersList: state.playersList.slice(0, -1)})

const shuffle = arr => arr.sort(() => Math.random() - 0.5);
const pListShuff = (state) => ({ ...state, playersList: shuffle(state.playersList)})

const pairList = (state) => ({ 
    ...state, 
        pairsList: state.player1List.map((item,index) => {
            const container = {};
            container.player1= (state.player1List[index].playerName);
            container.player2= (state.player2List[index].playerName);
  
  
      return container;
  })})




export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state);
        case "DECREMENT": return counterDecrease(state);
        case "SHUFFPLAYERNAME": return pListShuff(state); 
        case "ADDPLAYERNAMEP1": return pListP1(state, action);
        case "ADDPLAYERNAMEP2": return pairList(pListP2(state, action));
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

