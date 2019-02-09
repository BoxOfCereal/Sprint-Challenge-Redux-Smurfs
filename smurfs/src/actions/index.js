import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = "FETCHING_SMURFS";
export const SMURFS_FETCHED = "SMURFS_FETCHED";
export const SMURFS_SAVED = "SMURFS_SAVED";
export const SAVING_SMURFS = "SAVING_SMURFS";
export const EDITING_SMURFS = "EDITING_SMURFS";
export const SMURF_EDITED = "SMURF_EDITED";
export const SHOW_EDIT_FORM = "SHOW_EDIT_FORM";
export const HIDE_EDIT_FORM = "HIDE_EDIT_FORM";
export const ERROR = "ERROR";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: FETCHING_SMURFS });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(({ data }) => {
        console.log(data);
        dispatch({
          type: SMURFS_FETCHED,
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: `Failed: ${error}` });
      });
  };
}

export function saveSmurf(smurf) {
  return dispatch => {
    dispatch({ type: SAVING_SMURFS });
    axios
      .post(`http://localhost:3333/smurfs`, smurf)
      .then(({ data }) => {
        //destructering
        console.log(data);
        dispatch({
          type: SMURFS_SAVED,
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: `Failed: ${error}` });
      });
  };
}

export function updateSmurf(smurf) {
  return dispatch => {
    dispatch({ type: EDITING_SMURFS });
    //destruct id and smurf with no id
    const { id, ...smurfWithNoId } = smurf;
    axios
      .put(`http://localhost:3333/smurfs/${id}`, smurfWithNoId)
      .then(({ data }) => {
        //destructering
        console.log(data);
        dispatch({
          type: SMURF_EDITED,
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: `Failed: ${error}` });
      });
  };
}

export function showEditForm(id) {
  return {
    type: SHOW_EDIT_FORM,
    payload: id
  };
}

export function hideEditForm(id) {
  return {
    type: HIDE_EDIT_FORM,
    payload: id
  };
}
