import './App.css';
import { Container } from '@mui/material';
import Header from './components/Header';
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
