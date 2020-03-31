import {connect} from "react-redux";

import PlayerForm from './PlayerForm';

import {addPlayerName} from '../../../data/actions/actions'


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

  
    };
  }

export default  connect(mapStateToProps,mapDispatchToProps)(PlayerForm);