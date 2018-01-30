import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './containers/app/App';
import rootReducer from './reducers/RootReducer';
import registerServiceWorker from './registerServiceWorker';
import Authenticator from "./services/Authenticator";

let store = createStore(rootReducer, {
  user: {
    isAuthenticated: Authenticator.isAuthenticated()
  }
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
