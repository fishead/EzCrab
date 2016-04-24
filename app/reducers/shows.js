import { handleActions } from 'redux-actions';
import * as constants from '../constants/show';
import union from 'lodash/union';


export default handleActions({
  [constants.SHOWS_SEARCH_SUCCESS]: (state, action) => union(state, action.payload.result),
}, []);
