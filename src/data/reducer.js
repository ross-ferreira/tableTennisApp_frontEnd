import initial from '../data/initial';


const counterIncrease = state => ({ ...state, count: state.count + 1 });

const counterDecrease = state => ({ ...state, count: state.count - 1 });
 
const pList = (state,{playerName}) => ({ ...state, playersList: state.playersList.concat(playerName)})

const pListP1 = (state,{playerName}) => ({ ...state, player1List: state.player1List.concat(playerName)})

const pListP2 = (state,{playerName}) => ({ ...state, player2List: state.player2List.concat(playerName)})

const pListDelP1 = (state) => ({ ...state, player1List: state.player1List.slice(1)})

const pListDelP2 = (state) => ({ ...state, player2List: state.player2List.slice(1)})

const shuffle = arr => arr.sort(() => Math.random() - 0.5);
const pListShuff = (state) => ({ ...state, playersList: shuffle(state.playersList)})

const pairList = (state) => ({ 
    ...state, 
        pairsList: state.player1List.map((item,index) => {
            const container = {};
            container.player1= (state.player1List[index].playerName);
            container.gamesWonP1= (state.player1List[index].gamesWon);
            container.totalPointsP1= (state.player1List[index].totalPoints);
            container.scoreP1= (state.player1List[index].score);
            container.gamesPlayedP1= (state.player1List[index].gamesPlayed);

            container.player2= (state.player2List[index].playerName);
            container.gamesWonP2= (state.player2List[index].gamesWon);
            container.totalPointsP2= (state.player2List[index].totalPoints);
            container.scoreP2= (state.player2List[index].score);
            container.gamesPlayedP2= (state.player2List[index].gamesPlayed);

      return container;
  })})
  const r1Results = (state,{resultsR1}) => ({ ...state, pairsList: resultsR1})
  const r2Pairing = (state,{r2Pairs}) => ({ ...state, pairsListR2: r2Pairs})

  const r2Results = (state,{resultsR2}) => ({ ...state, pairsListR2: resultsR2})
  const r3Pairing = (state,{r3Pairs}) => ({ ...state, pairsListR3: r3Pairs})

  const r3Results = (state,{resultsR3}) => ({ ...state, pairsList3: resultsR3})
  const winnerResult = (state,{winner}) => ({ ...state, winnerR3: winner})

  const r1 = state => ({ ...state, r1Status: true});



//   const r1Results = (state,{resultsR1}) => ({ ...state, pairsList: resultsR1})
//   const r2Pairing = (state,{r2Pairs}) => ({ ...state, pairsListR2: r2Pairs})

//   const r2Results = (state,{resultsR2}) => ({ ...state, pairs2List: resultsR2})
//   const r3Pairing = (state,{r3Pairs}) => ({ ...state, pairsListR3: r3Pairs})

//   const r3Results = (state,{resultsR3}) => ({ ...state, pairsList3: resultsR3})
//   const winnerResult = (state,{winner}) => ({ ...state, winnerR3: winner})

export default (state, action) => {
  
    switch (action.type) {
        case "INCREMENT": return counterIncrease(state);
        case "DECREMENT": return counterDecrease(state);
        case "SHUFFPLAYERNAME": return pListShuff(state); 
        case "ADDPLAYERNAMEP1": return pListP1(state, action);
        case "ADDPLAYERNAMEP2": return pairList(pListP2(state, action));
        case "DELPLAYERNAMEP1": return pListDelP1(state);
        case "DELPLAYERNAMEP2": return pListDelP2(state);
        case "ADDR1RESULTS": return r2Pairing(r1Results(state,action),action);;
        case "ADDR2RESULTS": return r3Pairing(r2Results(state,action),action);;
        case "ADDR3RESULTS": return winnerResult(r3Results(state,action),action);;
        case "R1CAPTURESTATE": return r1(state);

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

