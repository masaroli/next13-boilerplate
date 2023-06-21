import React from 'react';
import { Typography, Container } from '@mui/material';
import MainNavigation from '../main-navigation/MainNavigation';
import Styles from './HomePage.module.scss';

function Header() {
  return (
    <header className={Styles.container}>
      <Container>
        <Typography textAlign="center">Some text before the navigation</Typography>
        <MainNavigation />
      </Container>
    </header>
  );
}

export default Header;
