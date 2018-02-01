import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import App from './containers/app/App';
import history from './history';
import rootReducer from './reducers/RootReducer';
import rootEpic from "./epics/RootEpic";
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let epicMiddleware = createEpicMiddleware(rootEpic);
let store = createStore(rootReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
