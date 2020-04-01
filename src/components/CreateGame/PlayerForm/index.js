import {connect} from "react-redux";

import PlayerForm from './PlayerForm';

import {addPlayerNameP2,addPlayerNameP1,removePlayerName,shufflePlayerName, increaseCounter,decreaseCounter} from '../../../data/actions/actions'


const mapStateToProps= (state) => {
  return { 
    playerName: state.playerName,
    counter:state.count,
    playerAdd: (state.count % 2 ===0),
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
        handleClick:() => {
          dispatch( removePlayerName() );
          dispatch( decreaseCounter() );
      },

      handleShuffleNames:() => {
        dispatch( shufflePlayerName());
    },

  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(PlayerForm);


