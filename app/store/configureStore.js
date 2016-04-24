import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import createLogger from 'redux-logger';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(
    sagaMiddleware,
    createLogger({
      predicate: (getState, action) => !action.type.startsWith('EFFECT_'),
    }),
  );
  const enhancer = compose(
    middleware,
  );
  const store = createStore(
    reducer,
    initialState,
    enhancer,
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
