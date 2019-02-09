import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchSmurfs } from "../actions/index";
import SmurfList from "./SmurfList/SmurfList";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mstp,
  { fetchSmurfs }
)(App);
