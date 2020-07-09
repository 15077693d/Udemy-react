import React from 'react';
import './App.css';
import Timer from "./Time"
function App() {
  return (
    <div className="App">
      <Timer start={Date.now()}/>
    </div>
  );
}

export default App;
