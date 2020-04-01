import { connect } from 'react-redux';
import Tournament from './Tournament';
import { addPlayerNameP1} from '../../data/actions/actions';
import Tournamnet from './Tournament';


const mapStateToProps = ({playersList}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        // playersList: playersList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        // handleIncrement: () => { 
        //     dispatch (addPlayerNameP1())            
        // },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tournamnet);


