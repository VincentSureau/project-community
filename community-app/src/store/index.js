/**
 * npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * local import
 */
import reducer from './reducer';

import axios from './axiosMiddleware';

// On prépare les middlewares
const appliedMiddleware = applyMiddleware(axios);

/**
 * store
 */
// devTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// compose : nécessaire avec les devTools
const enhancers = compose(appliedMiddleware, ...devTools);

// createStore
const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
