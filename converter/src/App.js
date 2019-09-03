import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Converter</h2>
        <form action=''>
          Amount of money to convert: <input type='text' name=''></input>
          <input type='submit' value='Convert'></input>
        </form>
      </header>
    </div>
  );
}

export default App;
