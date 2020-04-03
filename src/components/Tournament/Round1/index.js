import { connect } from 'react-redux';

import { addRound1Results} from '../../../data/actions/actions';

import Round1 from './Round1';


const mapStateToProps = ({pairsList,r1Status}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        pairsList: pairsList,
        r1Status : r1Status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleFormSubmit: (valueR1,r2Pairs) => { 
            dispatch (addRound1Results(valueR1,r2Pairs));            
        },

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Round1);

