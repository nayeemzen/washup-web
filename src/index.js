import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/app/App';
import RootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
