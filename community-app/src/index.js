/**
 * NPM import
 */
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
// Composant
import App from 'src/components/App';
// store
import store from 'src/store';

/**
 * Code
 */
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
