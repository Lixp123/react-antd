import * as  React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/index'
import * as serviceWorker from './serviceWorker';
console.log(store)
ReactDOM.render(<App store={store}/>, document.getElementById('root'));
serviceWorker.unregister();
