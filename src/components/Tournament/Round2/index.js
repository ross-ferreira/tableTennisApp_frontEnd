import { connect } from 'react-redux';

import { addRound2Results} from '../../../data/actions/actions';

import Round2 from './Round2';


const mapStateToProps = ({pairsListR3, r1Status,pairsListR2}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        ppairsListR3: pairsListR3,
        r1Status: r1Status,
        pairsListR2: pairsListR2,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleFormSubmitR2: (valueR2,r3Pairs) => { 
            dispatch (addRound2Results(valueR2,r3Pairs));            
        },

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Round2);


