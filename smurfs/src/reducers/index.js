/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURFS,
  SMURFS_FETCHED,
  SMURFS_SAVED,
  SAVING_SMURFS
} from "../actions/index";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  fetchingSmurfs: false,
  smurfsFetched: false,
  smurfsSaved: false,
  savingSmurfs: false,
  updatingSmurf: false,
  smurfUpdated: false,
  deletingSmurf: false,
  smurfDeleted: false,
  smurfs: [],
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        fetchingSmurfs: true,
        smurfsFetched: false,
        smurfsSaved: false,
        savingSmurfs: false,
        updatingSmurf: false,
        smurfUpdated: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: [],
        error: null
      };
    case SMURFS_FETCHED:
      return {
        fetchingSmurfs: false,
        smurfsFetched: true,
        smurfsSaved: false,
        savingSmurfs: false,
        updatingSmurf: false,
        smurfUpdated: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: action.payload,
        error: null
      };
    case SAVING_SMURFS:
      return {
        fetchingSmurfs: false,
        smurfsFetched: false,
        smurfsSaved: false,
        savingSmurfs: true,
        updatingSmurf: false,
        smurfUpdated: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: state.smurfs,
        error: null
      };
    case SMURFS_SAVED:
      return {
        fetchingSmurfs: false,
        smurfsFetched: false,
        smurfsSaved: true,
        savingSmurfs: false,
        updatingSmurf: false,
        smurfUpdated: false,
        deletingSmurf: false,
        smurfDeleted: false,
        smurfs: action.payload,
        error: null
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
