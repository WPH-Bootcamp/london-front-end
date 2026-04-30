import { useState } from "react";
import "./App.css";
import { TodoForm, TodoTable } from "../components";

type Todo = {
  id: number;
  task: string;
  status: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (task: string) => {
    const newTask: Todo = {
      id: Date.now(),
      task,
      status: false,
    };

    // prev adalah todos sebelumnya
    setTodos((prev) => [...prev, newTask]);
    console.log(todos);
  };

  const deleteTask = (id: number) => {
    // prev adalah todos sebelumnya
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const changeStatus = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.status = !todo.status;
          console.log(todo.status);
        }
        return todo;
      }),
    );
    // console.log(todos);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <div className="text-center p-6">
          <h1 className="text-3xl font-bold">To Do Apps</h1>
          <p className="text-gray-500">Kelola aktivitas harian kamu</p>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-2 shadow-md">
          <TodoForm onAdd={addTask} />
          <TodoTable
            todos={todos}
            onDelete={deleteTask}
            onChangeStatus={changeStatus}
          />
        </div>
      </div>
    </>
  );
}

export default App;
