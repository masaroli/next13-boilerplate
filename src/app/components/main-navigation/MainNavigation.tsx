import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Container } from '@mui/material';
import logoUrl from '../../../svgs/logo.svg?url';
import Styles from './MainNavigation.module.scss';

function MainNavigation() {
  return (
    <Container className={Styles.container}>
      <div className="logo">
        <Link href="/">
          <Image src={logoUrl} alt="Loviscek logo" />
        </Link>
      </div>
      <nav className={Styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/page-one">Page One</Link>
        <Link href="/page-two">Page Two</Link>
        <Link href="/page-three">Page Three</Link>
        <Link href="/page-four">Page Four</Link>
      </nav>
    </Container>
  );
}

export default MainNavigation;
