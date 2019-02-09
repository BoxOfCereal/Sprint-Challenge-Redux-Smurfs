import React from "react";
import { connect } from "react-redux";
import { showEditForm, setCurrentSmurf } from "../../actions/index";

const Smurf = props => {
  return (
    <li>
      <div>
        <h4>{props.smurf.name}</h4>
        <button
          onClick={() => {
            props.setCurrentSmurf(props.smurf.id);
            props.showEditForm();
          }}
        >
          Edit Smurf
        </button>
      </div>
    </li>
  );
};

export default connect(
  null,
  { showEditForm, setCurrentSmurf }
)(Smurf);
