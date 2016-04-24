import { fork } from 'redux-saga/effects';
import {
  watchSearchShows,
  watchFetchShow,
} from './show';

import {
  watchSearchEpisodes,
  watchFetchEpisode,
} from './episode';


export default function * rootSaga() {
  yield [
    fork(watchSearchShows),
    fork(watchFetchShow),
    fork(watchSearchEpisodes),
    fork(watchFetchEpisode),
  ];
}
