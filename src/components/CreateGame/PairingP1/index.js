import { connect } from 'react-redux';
import PairingP1 from './PairingP1';
// import { addPlayerName,} from '../../data/actions/actions';


const mapStateToProps = ({playersList}) => {
    
    return {

        playersList: playersList,
    }
}

export default connect (mapStateToProps)(PairingP1);
