import { connect } from 'react-redux';
import CreateGame from './CreateGame';
import { addPlayerName} from '../../data/actions/actions';


const mapStateToProps = ({playersList}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        playersList: playersList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleIncrement: () => { 
            dispatch (addPlayerName())            
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateGame);


// return {
        
//     handleIncrement: () => { 
//         dispatch (addPlayer())
//         dispatch (incrementScore())
        
        
//     },
// }
// }

