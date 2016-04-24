import { createAction } from 'redux-actions';
import * as constants from '../constants/message';

export const sendMessage = createAction(constants.MESSAGE_RECEIVE);
export const cleanMessage = createAction(constants.MESSAGE_CLEAN);
