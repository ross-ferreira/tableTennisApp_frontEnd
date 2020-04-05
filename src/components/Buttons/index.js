import { connect } from "react-redux";
import Buttons from "./Buttons";
import { increase, reset } from "../../data/actions/actions";

const mapDispatchToProps = dispatch => {
    return { 
        handleReset: () => dispatch(reset())
        }; 
    };

export default connect(null, mapDispatchToProps)(Buttons);
