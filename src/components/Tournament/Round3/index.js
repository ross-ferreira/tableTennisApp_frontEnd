import { connect } from 'react-redux';

import { addRound3Results} from '../../../data/actions/actions';

import Round3 from './Round3';


const mapStateToProps = ({pairsListR3, r1Status}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        pairsListR3: pairsListR3,
        r1Status: r1Status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleFormSubmitR3: (valueR3,winner) => { 
            dispatch (addRound3Results(valueR3,winner));            
        },

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Round3);



