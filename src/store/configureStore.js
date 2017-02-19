import { createStore, applyMiddleware } form 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger'
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const logger = createLogger();
  return {
    ...createStore(rootReducer,
      applyMiddleware(logger, sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};

export default configureStore;