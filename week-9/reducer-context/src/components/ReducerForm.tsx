import { useReducer } from "react";

type FormState = {
  fullName: string;
  email: string;
};

type Action =
  | {
      type: "SET_FIELD";
      field: string;
      value: string;
    }
  | {
      type: "RESET";
    };

const initialState: FormState = {
  fullName: "",
  email: "",
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
};

export default function ReducerForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h1>useReducer Form</h1>
      <input
        className="border p-2 borderd-gray-100 rounded-lg"
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={state.fullName}
        onChange={handleChange}
      />
      <input
        className="border p-2 borderd-gray-100 rounded-lg"
        type="email"
        name="email"
        placeholder="Email"
        value={state.email}
        onChange={handleChange}
      />
      <button
        className="p-2 bg-red-700 text-white hover:bg-red-800 rounded-lg"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}
