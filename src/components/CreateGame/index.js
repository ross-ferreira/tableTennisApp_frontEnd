import { connect } from 'react-redux';
import CreateGame from './CreateGame';

import { addPlayerNameP1} from '../../data/actions/actions';


const mapStateToProps = ({pairsList,player1List,player2List,count}) => {
    
    return {
        // srcImage: state.images[(state.counter -1)].url,
        pairsList: pairsList,
        player1List: player1List,
        player2List: player2List,
        count:count,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        handleIncrement: () => { 
            dispatch (addPlayerNameP1())            
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

