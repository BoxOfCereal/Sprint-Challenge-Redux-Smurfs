import React from "react";
import { connect } from "react-redux";
import {
  showEditForm,
  setCurrentSmurf,
  deleteSmurf
} from "../../actions/index";

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
        <button
          onClick={() => {
            props.deleteSmurf(props.smurf.id);
          }}
        >
          Delete Smurf
        </button>
      </div>
    </li>
  );
};

export default connect(
  null,
  { showEditForm, setCurrentSmurf, deleteSmurf }
)(Smurf);
