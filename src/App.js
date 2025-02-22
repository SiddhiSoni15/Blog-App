import React, { useState } from "react";
import Counter from "./components/Counter";
import { BsSun, BsMoon } from "react-icons/bs"; // Icons for dark mode
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <nav className="navbar">
        <h1>Counter</h1>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>
      </nav>
      <Counter />
    </div>
  );
};

export default App;
