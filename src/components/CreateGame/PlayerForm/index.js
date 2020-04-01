import {connect} from "react-redux";

import PlayerForm from './PlayerForm';

import {addPlayerName,removePlayerName,shufflePlayerName} from '../../../data/actions/actions'


const mapStateToProps= (state) => {
  return { 
    playerName: state.playerName,
  };
}

const mapDispatchToProps= (dispatch) => {
    return { 
        
        handleFormSubmit:(valueP) => {
            dispatch( addPlayerName(valueP) );
        },
        handleClick:() => {
          dispatch( removePlayerName() );
      },

      handleShuffleNames:() => {
        dispatch( shufflePlayerName());
    },

  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(PlayerForm);


