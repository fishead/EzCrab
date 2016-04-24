import { handleActions } from 'redux-actions';
import * as constants from '../constants/entity';
import merge from 'lodash/merge';


export default handleActions({
  [constants.ENTITIES_RECEIVED]: (state, action) => merge({}, state, action.payload.entities),
}, {
  shows: {},
  episodes: {},
});
