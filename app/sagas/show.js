import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';
import * as apis from '../apis/show';
import * as constants from '../constants/show';
import * as actions from '../actions/show';
import request from './request';
import * as entityActions from '../actions/entities';
import { normalize } from 'normalizr';
import * as messageActions from '../actions/message';


function * searchShows() {
  try {
    const api = apis.searchShows();
    const res = yield* request(api);
    const data = normalize(res.data, api.schema);
    yield put(entityActions.receiveEntities(data));
    yield put(actions.searchShowsSuccess(data));
  } catch (err) {
    yield put(messageActions.sendMessage({
      type: 'error',
      title: '错误',
      text: err.message,
    }));
  }
}

function * fetchShow(action) {
  try {
    const showId = action.payload;
    const api = apis.fetchShow(showId);
    const res = yield* request(api);
    const data = normalize(res.data, api.schema);
    yield put(entityActions.receiveEntities(data));
    yield put(actions.previewMapShow(data));
  } catch (err) {
    yield put(messageActions.sendMessage({
      type: 'error',
      title: '错误',
      text: err.message,
    }));
  }
}

export function * watchSearchShows() {
  yield* takeEvery(constants.SHOWS_SEARCH, searchShows);
}

export function * watchFetchShow() {
  yield* takeEvery(constants.SHOW_FETCH, fetchShow);
}
