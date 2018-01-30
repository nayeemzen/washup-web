import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import App from './containers/app/App';
import rootReducer from './reducers/RootReducer';
import rootEpic from "./epics/RootEpic";
import registerServiceWorker from './registerServiceWorker';

let epicMiddleware = createEpicMiddleware(rootEpic);
let store = createStore(rootReducer, applyMiddleware(epicMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
