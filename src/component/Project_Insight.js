import React from "react";
import { connect } from "react-redux";
import pn from "../media/01_Project insight.png";
import { next } from "../redux/actions";
import { withRouter } from "react-router-dom";

class ProjectInsight extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.next(this.props.history);
        }, 5000);
    }
    render() {
        return (
            <div>
                <img src={pn} width="100%" height="50%" />
            </div>
        );
    }
}
function mapStateToProps(state) {
    //console.log(state.rootRecuer);
    return {
        data: state.rootRecuer.data,
        counter: state.rootRecuer.counter
    };
}
function mapDispatchToPropsCsat(dispatch) {
    return {
        next: () => {
            console.log("CLICK");
            dispatch({ type: "NEXT" });
        }
    };
}

export default connect(
    null,
    { next }
)(withRouter(ProjectInsight));
