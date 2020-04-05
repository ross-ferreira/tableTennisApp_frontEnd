import {connect} from "react-redux";

import Header from './Header';

import { reset } from '../../../src/data/actions/actions'

const mapDispatchToProps= (dispatch) => {
    return { 
        
        handleReset:() => {
            dispatch( reset() );
        },

    };
  }

export default  connect(null,mapDispatchToProps)(Header);


