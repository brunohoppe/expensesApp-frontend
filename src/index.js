import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
let h = React.createElement;

ReactDOM.render(h(App, null),
document.getElementById('root'));

registerServiceWorker();
