import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { MainMenu, MainMenuItem } from './components/MainMenu/MainMenu';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';

const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("Contact", "/contact/"),
  new MainMenuItem("LogIn", "/login/"),
]

ReactDOM.render(
  <React.StrictMode>
    <MainMenu items= { menuItems }></MainMenu>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
