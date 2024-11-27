import React from 'react';
import '../public/styles/globals.scss';
import { Header } from './assets/components/Header';
import { Container } from './assets/components/Container';
import { Footer } from './assets/components/Footer';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        {/*  */}
        <Footer />
      </Container>
    </>
  );
};

export default App;
