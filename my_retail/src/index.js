import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';



const storeInstance = createStore(
    applyMiddleware(),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

