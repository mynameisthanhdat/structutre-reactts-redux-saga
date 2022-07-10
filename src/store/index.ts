import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from '../redux/reducers'
import rootSaga from '../sagas/rootSagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  rootReducers,
  {},
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)
