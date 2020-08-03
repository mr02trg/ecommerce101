import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Homepage from './views/Homepage/Homepage';

function App() {
  return (
    <>
    <Header />
      <div className="app">
        <Homepage />
      </div>
    </>
  );
}

export default App;
