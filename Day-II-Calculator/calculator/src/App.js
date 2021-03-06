import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div class ="calculator">
      <ActionButton />
      <NumberButton />
    </div>
  );
};

export default App;
