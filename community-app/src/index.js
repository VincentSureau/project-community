/**
 * NPM import
 */
// Bootstrap

import '@babel/polyfill';
import './styles/index.scss';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';

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
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (window.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);

const rootComponent = (
  <Provider store={store}>
    <Router onUpdate={() => document.window.scrollTo(0, 0)}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>
);

render(rootComponent, document.getElementById('root'));
