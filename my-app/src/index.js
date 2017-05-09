import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux"
import store from "./store"

const app = document.getElementById('root');

ReactDOM.render(<Provider store ={store}>
  <div><App />
   <App /></div>
  </Provider>,
  app
);
