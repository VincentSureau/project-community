/**
 * npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * local import
 */
import reducer from './reducer';
// import axios from './axiosMiddleware';
import home from './middlewares/homeMiddleware';
import member from './middlewares/memberMiddleware';
import project from './middlewares/projectMiddleware';
import competence from './middlewares/competenceMiddleware';
import prostatus from './middlewares/prostatusMiddleware';
import filter from './middlewares/filterMiddleware';
import login from './middlewares/loginMiddleware';

// On prépare les middlewares
const appliedMiddleware = applyMiddleware(
  home,
  member,
  project,
  competence,
  prostatus,
  filter,
  login,
);

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
