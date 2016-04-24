import { createAction } from 'redux-actions';
import * as constants from '../constants/episode';

export const searchEpisodes = createAction(constants.EPISODES_SEARCH);
export const searchEpisodesSuccess = createAction(constants.EPISODES_SEARCH_SUCCESS);

export const fetchEpisode = createAction(constants.EPISODE_FETCH);
export const fetchEpisodeSuccess = createAction(constants.EPISODE_FETCH_SUCCESS);
