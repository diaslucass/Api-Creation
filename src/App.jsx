import { useState, useEffect } from 'react';
import './App.css';
import { fetchCBD } from './services/api';
import Header from './components/header';
import Finalistas from './services/finalista';

function App() {
  

  return (
    <>
      <Header />
      <button></button>
      <main>
        <Finalistas />
        
      </main>
    </>
  );
}

export default App;
