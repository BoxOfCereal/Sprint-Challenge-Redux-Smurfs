import React from "react";
import { connect } from "react-redux";
import { editSmurf } from "../../actions";

class AddSmurfForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      id: ""
    };
  }

  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  editSmurf = e => {
    e.preventDefault();
    this.props.editSmurf({ ...this.state });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div>
        <form action="submit" onSubmit={this.editSmurf}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.inputChange}
            value={this.state.name}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.inputChange}
            value={this.state.age}
          />
          <input
            type="text"
            name="height"
            placeholder="Height"
            onChange={this.inputChange}
            value={this.state.height}
          />
          <button type="submit">Edit A Smurf!</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {
    editSmurf
  }
)(AddSmurfForm);
