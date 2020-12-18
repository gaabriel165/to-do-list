import React from 'react';
import Header from './components/header/header';
import Routes from './routes';
import Message from './components/mensagemInicial/errorMessage'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <Routes />
    </div>
  );
}

export default App;
