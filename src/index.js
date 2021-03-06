import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import createStore from './store';
import 'semantic-ui-css/semantic.min.css'

import App from './containers/App';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

