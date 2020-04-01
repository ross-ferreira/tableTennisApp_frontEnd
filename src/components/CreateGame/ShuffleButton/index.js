import {connect} from "react-redux";

import ShuffleButton from './ShuffleButton';

import {shufflePlayerName} from '../../../data/actions/actions'


const mapDispatchToProps= (dispatch) => {
    return { 
        
        handleClick:() => {
          dispatch( shufflePlayerName() );
        },

  
    };
  }

export default  connect(null,mapDispatchToProps)(ShuffleButton);


// handleFormSubmit:(valueP) => {
//     dispatch( addPlayerName(valueP) );
// },
// handleClick:() => {
//   dispatch( removePlayerName() );
// },


