import { createContext, useContext, useReducer } from "react";

type Todo = {
  id: number;
  task: string;
};

type State = {
  todos: Todo[];
};

type Action = {
  type: "DELETE_TODO";
  payload: number;
};

type TodoContextType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  todos: [
    {
      id: 1,
      task: "Belajar React",
    },
    {
      id: 2,
      task: "Belajar TypeScript",
    },
    {
      id: 3,
      task: "Belajar useReducer",
    },
  ],
};

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

const TodoList = () => {
  const context = useContext(TodoContext);

  if (!context) return null;

  const { state, dispatch } = context;

  const handleDelete = (id: number) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <div>
      <h2>Todo List</h2>

      {state.todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <span>{todo.task}</span>

          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default function Combine() {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <h1>Combine useReducer + useContext</h1>

      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}
