import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as apis from '../apis/episode';
import * as constants from '../constants/episode';
import * as actions from '../actions/episode';
import request from './request';
import * as entityActions from '../actions/entities';
import { normalize } from 'normalizr';
import * as messageActions from '../actions/message';


function * searchEpisodes(action) {
  try {
    const api = apis.searchEpisodes(action.payload);
    const res = yield* request(api);
    const data = normalize(res.data, api.schema);

    yield put(entityActions.receiveEntities(data));
    yield put(actions.searchEpisodesSuccess(data));
  } catch (err) {
    yield put(messageActions.sendMessage({
      type: 'error',
      title: '错误',
      text: err.message,
    }));
  }
}

function * fetchEpisode(action) {
  try {
    const profileId = action.payload;
    const api = apis.fetchEpisode(profileId);
    const res = yield* request(api);
    const data = normalize(res.data, api.schema);
    yield put(entityActions.receiveEntities(data));
    yield put(actions.previewMapEpisode(data));
  } catch (err) {
    yield put(messageActions.sendMessage({
      type: 'error',
      title: '错误',
      text: err.message,
    }));
  }
}

export function * watchSearchEpisodes() {
  yield* takeEvery(constants.EPISODES_SEARCH, searchEpisodes);
}

export function * watchFetchEpisode() {
  yield* takeEvery(constants.EPISODE_FETCH, fetchEpisode);
}
