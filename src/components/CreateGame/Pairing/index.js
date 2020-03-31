import { connect } from 'react-redux';
import Pairing from '../Pairing/Pairing';
// import { addPlayerName,} from '../../data/actions/actions';


const mapStateToProps = ({playersList}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        playersList: playersList,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
        
//         // handleIncrement: () => { 
//         //     dispatch (addPlayerName())            
            
//         // },
//     }
// }
export default connect (mapStateToProps)(Pairing);
