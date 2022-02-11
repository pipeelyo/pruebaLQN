import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import theme from './styles/temaConfig';
import Characters from './components/characters';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Characters />
      </Container>
    </>

  );
}

export default App;
