import React from "react";
import SearchEngine from "./SearchEngine";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search</h1>
        <SearchEngine city="Sydney" />
      </header>
    </div>
  );
}

export default App;
