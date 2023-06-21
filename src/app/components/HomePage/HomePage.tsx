'use client';

import { Typography } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import Styles from './HomePage.module.scss';

function HomePage({ content }: { content: string }) {
  return (
    <>
      <Header />
      <main className={Styles.container}>
        <Typography variant="h2">{content}</Typography>
      </main>
    </>
  );
}

export default HomePage;
