import { connect } from 'react-redux';

import NameList from './NameList';



const mapStateToProps = ({pairsList,player1List,player2List,count}) => {
    
    return {
        pairsList: pairsList,
        player1List: player1List,
        player2List: player2List,
        count:count,
    }
}

export default connect(mapStateToProps)(NameList);
