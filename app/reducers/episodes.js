import { handleActions } from 'redux-actions';
import * as constants from '../constants/episode';


export default handleActions({
  [constants.EPISODES_SEARCH_SUCCESS]: (state, action) => action.payload.result,
}, []);
