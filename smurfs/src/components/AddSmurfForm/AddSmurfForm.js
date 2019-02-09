import React from "react";
import { connect } from "react-redux";
import { saveSmurf } from "../actions";

class AddSmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      email: ""
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSmurf = e => {
    e.preventDefault();
    this.props.saveSmurf({ ...this.state });
    this.setState({ name: "", age: "", email: "" });
  };

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.createSmurf}>
          <input
            type="text"
            name="name"
            onChange={this.inputChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="age"
            onChange={this.inputChange}
            value={this.state.age}
          />
          <input
            type="text"
            name="email"
            onChange={this.inputChange}
            value={this.state.email}
          />
          <button type="submit">Add A Smurf!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { saveSmurf }
)(AddSmurfForm);
