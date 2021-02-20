import "./App.css";
import React from "react";
import { CounterContextProvider } from "./store/counter-context";
import CounterDisplay from "./components/counter-display";
import CounterButton from "./components/counter-button";
function App() {
  return (
    <div className="App">
      <CounterContextProvider>
        <CounterDisplay />
        <CounterButton />
      </CounterContextProvider>
    </div>
  );
}

export default App;
