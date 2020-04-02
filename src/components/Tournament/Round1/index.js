import { connect } from 'react-redux';

import { addRound1Results} from '../../../data/actions/actions';

import Round1 from './Round1';


const mapStateToProps = ({pairsList}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        pairsList: pairsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleFormSubmit: (valueR1) => { 
            dispatch (addRound1Results(valueR1))            
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Round1);


