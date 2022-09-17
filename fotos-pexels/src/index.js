import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicos.css';
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)