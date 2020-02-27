import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {reducers} from '../reducers/rootReducer';
import rootSaga from '../sagas/todoSagas'

const sagaMiddleWear = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleWear));

sagaMiddleWear.run(rootSaga);

export default store;