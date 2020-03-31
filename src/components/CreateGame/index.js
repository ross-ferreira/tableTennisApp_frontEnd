import { connect } from 'react-redux';
import CreateGame from './CreateGame';
import { addPlayerName,} from '../../data/actions/actions';


// const mapStateToProps = (state) => {
    
//     return {
//         srcImage: state.images[(state.counter -1)].url,
//         counter: state.counter
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleIncrement: () => { 
            dispatch (addPlayerName())            
            
        },
    }
}
export default connect(null,mapDispatchToProps)(CreateGame);


// return {
        
//     handleIncrement: () => { 
//         dispatch (addPlayer())
//         dispatch (incrementScore())
        
        
//     },
// }
// }

