import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import ProjectInsight from "./Project_Insight.js";
import ActiveProject from "./Active_Project.js";
import CsatReceived from "./Csat_Received.js";
import Animate from "./Animate.js";
import jdata from "../data/data.json";
import { addRoute, next } from "../redux/actions";
import { connect } from "react-redux";
import DummyIntro from "./DummyIntro.js";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const rt = ["/projectinsight", "/activeproject", "/csatreceived"];
        jdata.map((i, d) => {
            i.route = rt[d % 3];
        });
        this.props.addRoute(jdata);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route
                        path="/projectinsight"
                        exact
                        component={Animate(ProjectInsight)}
                    />
                    <Route
                        path="/activeproject"
                        exact
                        component={Animate(ActiveProject)}
                    />
                    <Route
                        path="/csatreceived"
                        exact
                        component={Animate(CsatReceived)}
                    />
                    <Route path="/" exact component={Animate(DummyIntro)} />
                </Switch>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        data: state.data,
        counter: state.counter
    };
}

export default connect(
    mapStateToProps,
    { addRoute }
)(withRouter(App));
