import React from 'react';
import './App.css';
import { Card, Container } from 'react-bootstrap';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainMenu } from '../MainMenu/MainMenu';

function App() {
  return (
      <Container>
        <FontAwesomeIcon icon = { faHome }></FontAwesomeIcon>
        Home
      </Container>
  );
}

export default App;
