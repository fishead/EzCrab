import { createAction } from 'redux-actions';
import * as constants from '../constants/show';

export const searchShows = createAction(constants.SHOWS_SEARCH);
export const searchShowsSuccess = createAction(constants.SHOWS_SEARCH_SUCCESS);

export const fetchShow = createAction(constants.SHOW_FETCH);
export const fetchShowSuccess = createAction(constants.SHOW_FETCH_SUCCESS);
