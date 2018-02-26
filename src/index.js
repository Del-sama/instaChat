import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './js/App';
import reducers from './js/reducers/';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();