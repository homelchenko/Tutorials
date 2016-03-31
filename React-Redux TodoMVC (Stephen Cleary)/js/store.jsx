import { applyMiddleware, compose, createStore } from 'redux';
import immutableState from 'redux-immutable-state-invariant';

import reducers  from './reducers';
import DevTools from './devTools';

const middleware = applyMiddleware(immutableState());

const storeFactory = compose(middleware, DevTools.instrument())(createStore);

export default storeFactory(reducers);