import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

const initialState: State = {
  count: 0,
};

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export default function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <h1>useReducer Counter</h1>

      <h2>{state.count}</h2>

      <button
        className="btn-increment"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>

      <button
        className="btn-decrement"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>

      <button className="btn-reset" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}
