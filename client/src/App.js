import React from 'react';
import FetchData from "./components/FetchData";
import { useDarkMode } from "./hooks/useDarkMode";
// import { Background } from "./components/Styles";
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div data-testid="testtag" className="App">
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      <h1>SPRINT ADVANCED REACT</h1>
      <h2>World Cup Soccer Players!</h2>
      <FetchData />
    </div>
  );
}

export default App;
