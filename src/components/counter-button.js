import { useContext } from "react";
import React from "react";
import { CounterContext } from "../store/counter-context";
import { Button } from "semantic-ui-react";

const CounterButton = () => {
  const [count, setCount] = useContext(CounterContext);
  return (
    <div>
      <Button.Group>
        <Button onClick={() => setCount(count + 1)}>Add</Button>
        <Button onClick={() => setCount(count - 1)}>Minus</Button>
      </Button.Group>
    </div>
  );
};
export default CounterButton;
