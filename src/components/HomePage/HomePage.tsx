import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { MainMenu } from '../MainMenu/MainMenu';

function HomePage() {
  return (
      <Container>
        <FontAwesomeIcon icon = { faHome }></FontAwesomeIcon>
        Home
      </Container>
  );
}

export default HomePage;
