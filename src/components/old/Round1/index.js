import { connect } from 'react-redux';

// import { addPlayerNameP1} from '../../data/actions/actions';

import Round1 from './Round1';


const mapStateToProps = ({pairsList}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        pairsList: pairsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        // handleIncrement: () => { 
        //     dispatch (addPlayerNameP1())            
        // },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Round1);


