import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import creatSagaMiddleware from 'redux-saga';
import rootSaga from './reduxUtils/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reduxUtils/rootReducer';

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = creatSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
