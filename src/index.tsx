import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { MainMenu, MainMenuItem } from './components/MainMenu/MainMenu';
import './index.css';
import reportWebVitals from './reportWebVitals';

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
