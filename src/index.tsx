import React from 'react';
import { MainMenu, MainMenuItem } from './components/MainMenu/MainMenu';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import { HashRouter,Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { ContactPage } from './components/ContactPage/ContantPage';
import { UserLoginPage } from './components/UserLoginPage/UserLoginPage';
import ReactDOM from 'react-dom';
import MoviePage from './components/MoviePage/MoviePage';

const menuItems = [
  new MainMenuItem("Home", "/"),
  new MainMenuItem("About us", "/page/about/"),
  new MainMenuItem("Contact", "/contact/"),
  new MainMenuItem("Log in", "/user/login/"),
  new MainMenuItem("Movie 7", "/movie/7/"),
  new MainMenuItem("Movie 21", "/movie/21/"),
]

ReactDOM.render(
  <React.StrictMode>
    <MainMenu items= { menuItems }></MainMenu>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ HomePage }></Route>
        <Route path="/contact" component= { ContactPage }></Route>
        <Route path="/user/login" component= { UserLoginPage }></Route>
        <Route path="/movie/:mId" component = { MoviePage } ></Route>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
