import {connect} from "react-redux";

import PlayerForm from './PlayerForm';

import {
  addPlayerNameP2,
  addPlayerNameP1,
  removePlayerNameP1,
  removePlayerNameP2,
  shufflePlayerName, 
  increaseCounter,
  decreaseCounter} from '../../../data/actions/actions'


const mapStateToProps= (state) => {
  return { 
    playerName: state.playerName,
    counter:state.count,
    playerAdd: (state.count % 2 ===0),
    maxPlayers: (state.count < 9),
    minPlayers: (state.count >1),
  };
}

const mapDispatchToProps= (dispatch) => {
    return { 
        
        handleFormSubmitP1:(valueP) => {
            dispatch( addPlayerNameP1(valueP) );
            dispatch( increaseCounter() )
        },
        handleFormSubmitP2:(valueP) => {
          dispatch( addPlayerNameP2(valueP) );
          dispatch( increaseCounter() )
      },
        handleClickP1:() => {
          dispatch( removePlayerNameP1() );
          dispatch( decreaseCounter() );
      },
      handleClickP2:() => {
        dispatch( removePlayerNameP2() );
        dispatch( decreaseCounter() );
    },

      handleShuffleNames:() => {
        dispatch( shufflePlayerName());
    },

  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(PlayerForm);


