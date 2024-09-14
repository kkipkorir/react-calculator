import React from 'react';
import './App.css';
import ButtonPanel from './appComponents/buttonpanel';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <div className={`App ${theme === 'dark' ? 'dark-mode' : 'light-mode'} `}>

      <ButtonPanel theme={theme} toggleTheme={toggleTheme} />

    </div>
  );
}

export default App;
