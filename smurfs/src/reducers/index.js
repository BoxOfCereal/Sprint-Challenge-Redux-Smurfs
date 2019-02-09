/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  SMURFS_SAVED,
  SAVING_SMURFS,
  EDITING_SMURFS,
  SMURF_EDITED,
  SHOW_EDIT_FORM,
  HIDE_EDIT_FORM,
  SET_CURRENT_SMURF
} from "../actions/index";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   editingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  smurfsSaved: false,
  savingSmurfs: false,
  editingSmurf: false,
  smurfEdited: false,
  deletingSmurf: false,
  smurfDeleted: false,
  smurfs: [],
  error: null,
  currentSmurf: null,
  showEditForm: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        fetchingSmurfs: true,
        smurfsFetched: false,
        smurfsSaved: false,
        savingSmurfs: false,
        editingSmurf: false,
        smurfEdited: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: [],
        error: null,
        currentSmurf: null,
        showEditForm: false
      };
    case SMURFS_FETCHED:
      return {
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfsSaved: false,
        savingSmurfs: false,
        editingSmurf: false,
        smurfEdited: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: action.payload,
        error: null,
        currentSmurf: null,
        showEditForm: false
      };
    case SAVING_SMURFS:
      return {
        fetchingSmurfs: false,
        smurfsFetched: false,
        smurfsSaved: false,
        savingSmurfs: true,
        editingSmurf: false,
        smurfEdited: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: state.smurfs,
        error: null,
        currentSmurf: null,
        showEditForm: false
      };
    case SMURFS_SAVED:
      return {
        fetchingSmurfs: false,
        smurfsFetched: false,
        smurfsSaved: true,
        savingSmurfs: false,
        editingSmurf: false,
        smurfEdited: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: action.payload,
        error: null,
        currentSmurf: null,
        showEditForm: false
      };
    case EDITING_SMURFS:
      return {
        fetchingSmurfs: false,
        smurfsFetched: false,
        smurfsSaved: false,
        savingSmurfs: false,
        editingSmurf: true,
        smurfEdited: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: state.smurfs,
        error: null,
        currentSmurf: null,
        showEditForm: false
      };
    case SMURF_EDITED:
      return {
        fetchingSmurfs: false,
        smurfsFetched: false,
        smurfsSaved: false,
        savingSmurfs: false,
        editingSmurf: false,
        smurfEdited: true,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: action.payload,
        error: null,
        currentSmurf: null,
        showEditForm: false
      };
    case SHOW_EDIT_FORM:
      return {
        ...state,
        showEditForm: true
      };
    case HIDE_EDIT_FORM:
      return {
        ...state,
        showEditForm: false
      };
    case SET_CURRENT_SMURF:
      return {
        ...state,
        currentSmurf: action.payload
      };
    default:
      return state;
  }
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default rootReducer;
