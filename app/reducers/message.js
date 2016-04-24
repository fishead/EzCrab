import { handleActions } from 'redux-actions';
import * as constants from '../constants/message';

export default handleActions({
  [constants.MESSAGE_RECEIVE]: (state, action) => action.payload,
  [constants.MESSAGE_CLEAN]: () => null,
}, null);
