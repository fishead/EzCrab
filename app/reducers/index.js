import { combineReducers } from 'redux';
import entities from './entities';
import message from './message';
import shows from './shows';
import episodes from './episodes';


export default (state = {}, action) => {
  const nextState = combineReducers({
    entities,
    shows,
    message,
    episodes,
  })(state, action);
  return nextState;
};
