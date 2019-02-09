import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { fetchSmurfs } from "../actions/index";
import SmurfList from "./SmurfList/SmurfList";
import AddSmurfForm from "./AddSmurfForm/AddSmurfForm";
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
        <AddSmurfForm />
      </div>
    );
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfsFetched: state.smurfsFetched,
    smurfsSaved: state.smurfsSaved,
    savingSmurfs: state.savingSmurfs
  };
};

export default connect(
  mstp,
  { fetchSmurfs }
)(App);
