import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import {composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware(); 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
// applyMiddeware : 스토어에 미들웨어를 적용하는 함수 (만약 여러개라면? -> 괄호 안에
//루트 리듀서를 불러와서 이를 통해 새로운 스토어를 만들고, provider를 만들어 플젝에 적용 

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해줍니다. (문제의 항목이다)

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
