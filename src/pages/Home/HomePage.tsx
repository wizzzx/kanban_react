import React, { useState } from 'react';
import { Header } from '../../assets/components/Header';
import { Footer } from '../../assets/components/Footer';
import { Link, Outlet } from 'react-router-dom';
import styles from './page.module.scss';
import { Container } from '../../assets/components/Container';

const HomePage: React.FC = () => {
  return (
    <Container className={styles.container}>
      <Header />
      <div>
        <Link to={'/register'} className={styles.register}>
          register
        </Link>
        <Link to={'/login'} className={styles.login}>
          login
        </Link>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default HomePage;
