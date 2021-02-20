import "./App.css";
import React from "react";
import { Container } from "semantic-ui-react";
import CounterView from './views/counter-view'
function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <CounterView />
    </Container>
  );
}
export default App;
