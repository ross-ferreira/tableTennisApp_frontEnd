import {connect} from "react-redux";

import PlayerForm from './PlayerForm';

import {addPlayerName,removePlayerName} from '../../../data/actions/actions'


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

  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(PlayerForm);