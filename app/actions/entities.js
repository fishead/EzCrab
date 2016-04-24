import { createAction } from 'redux-actions';
import * as constants from '../constants/entity';

export const receiveEntities = createAction(constants.ENTITIES_RECEIVED);
