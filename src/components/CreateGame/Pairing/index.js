import { connect } from 'react-redux';
import Pairing from './Pairing';
// import { addPlayerName,} from '../../data/actions/actions';


const mapStateToProps = ({pairsList}) => {
    
    return {

        pairsList: pairsList,
    }
}

export default connect (mapStateToProps)(Pairing);
