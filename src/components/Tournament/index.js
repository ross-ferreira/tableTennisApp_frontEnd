import { connect } from 'react-redux';

import { captureR1} from '../../data/actions/actions';

import Tournamnet from './Tournament';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick:()=>{
            dispatch (captureR1())
        },
        // handleIncrement: () => { 
        //     dispatch (addPlayerNameP1())            
        // },
    }
}
export default connect(null,mapDispatchToProps)(Tournamnet);


