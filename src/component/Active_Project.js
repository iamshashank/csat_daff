import React from "react";
import { connect } from "react-redux";
import { next } from "../redux/actions";
import { withRouter } from "react-router-dom";

import ap from "../media/02_Active projects.png";

class ActiveProject extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.next(this.props.history);
        }, 5000);
    }
    render() {
        return (
            <div>
                <img src={ap} width="100%" height="50%" />
            </div>
        );
    }
}

export default connect(
    null,
    { next }
)(withRouter(ActiveProject));
