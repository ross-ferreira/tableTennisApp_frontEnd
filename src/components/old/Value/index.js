import { connect } from "react-redux";
import Value from "./Value";

const mapStateToProps = state => {
  return {
    value: state.count, };
};

export default connect(mapStateToProps)(Value);