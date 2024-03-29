import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import configureStore from './store/configureStore';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';

const appStore = configureStore({});

const Root = ({ store }) => (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(
  <Root store={appStore} />, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
