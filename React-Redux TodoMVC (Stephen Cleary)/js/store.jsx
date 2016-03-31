import { createStore } from 'redux';

import reducers  from './reducers';
import DevTools from './devTools';

export default createStore(
    reducers,
    DevTools.instrument());