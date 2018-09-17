import React from "react";
import { connect } from "react-redux";
import { next } from "../redux/actions";
import { withRouter } from "react-router-dom";

class DummyIntro extends React.Component {
    componentDidMount() {
        setTimeout(this.props.next(this.props.history), 3000);
    }
    render() {
        return <div>Loading.....</div>;
    }
}
function mapStateToProps(state) {
    //console.log(state.rootRecuer);
    return {
        data: state.data,
        counter: state.counter
    };
}
function mapDispatchToPropsCsat(dispatch) {
    return {
        next: () => {
            console.log("CLICK DUMMY");
            dispatch({ type: "NEXT" });
        }
    };
}

export default connect(
    mapStateToProps,
    { next }
)(withRouter(DummyIntro));
