import React, { useState } from "react";

type Props = {
  onAdd: (task: string) => void;
};

const TodoForm = ({ onAdd }: Props) => {
  const [task, setTask] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(task);
    setTask("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Todo Form</h2>
      <form onSubmit={submitHandler}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full border p-2 rounded-lg"
          placeholder="Masukan task"
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded-md">
          + Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
