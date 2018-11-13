/**
 * npm import
 */
import { createStore } from 'redux';

/**
 * local import
 */
import reducer from './reducer';

/**
 * store
 */
// devTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// createStore
const store = createStore(reducer, ...devTools);

/**
 * Export
 */
export default store;
