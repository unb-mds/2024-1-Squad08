import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import cadastro from './components/pages/cadastro.js'
import { renderToStaticMarkup } from 'react-dom/server';

const domNode = document.getElementById('root')
const root = ReactDOM.createRoot(domNode);
root.render(<App></App>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
