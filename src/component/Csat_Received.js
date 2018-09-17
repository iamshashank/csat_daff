import React from "react";
import { connect } from "react-redux";
import { next } from "../redux/actions";
import { withRouter } from "react-router-dom";

import cr from "../media/03_Csat received.png";

class CsatReceived extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.next(this.props.history);
        }, 5000);
    }
    render() {
        return (
            <div>
                <img src={cr} width="100%" height="50%" />
            </div>
        );
    }
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
)(withRouter(CsatReceived));
