import { useReducer, useState } from "react";
import { Button } from "../Button";
import { useRenderCounter } from "../../hooks/useRenderCounter";

type Actions = {
  type: "increment" | "decrement";
  payload: number;
};

const reducer = (state: number, action: Actions) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    default:
      throw new Error("Unknown action");
  }
};

export const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const [increment, setIncrement] = useState<string>("");
  useRenderCounter("CounterWithReducer");

  return (
    <>
      <h1>Count: {state}</h1>
      <Button
        onClick={() => dispatch({ type: "decrement", payload: 25 })}
        type="button"
      >
        -25
      </Button>
      <Button
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
        type="button"
      >
        -10
      </Button>
      <Button
        onClick={() => dispatch({ type: "decrement", payload: 5 })}
        type="button"
      >
        -5
      </Button>
      <Button
        onClick={() => dispatch({ type: "decrement", payload: 1 })}
        type="button"
      >
        -1
      </Button>

      <Button
        onClick={() => dispatch({ type: "increment", payload: 1 })}
        type="button"
      >
        +1
      </Button>
      <Button
        onClick={() => dispatch({ type: "increment", payload: 5 })}
        type="button"
      >
        +5
      </Button>
      <Button
        onClick={() => dispatch({ type: "increment", payload: 10 })}
        type="button"
      >
        +10
      </Button>
      <Button
        onClick={() => dispatch({ type: "increment", payload: 25 })}
        type="button"
      >
        +25
      </Button>
      <input
        onChange={(e) => setIncrement(e.target.value)}
        type="text"
        value={increment}
      />
      <Button
        onClick={() => {
          dispatch({ type: "increment", payload: Number(increment) || 0 });
          setIncrement("");
        }}
        type="button"
      >
        Increase
      </Button>
    </>
  );
};