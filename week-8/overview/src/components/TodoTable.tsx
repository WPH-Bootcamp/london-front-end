import React from "react";

type Todo = {
  id: number;
  task: string;
  status: boolean;
};

type Props = {
  todos: Todo[];
  onDelete: (id: number) => void;
  onChangeStatus: (id: number) => void;
};

const TodoTable = ({ todos, onDelete, onChangeStatus }: Props) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold">Todo Apps</h2>
        <p>Total Todo: {todos.length}</p>
      </div>
      <table className="w-full border">
        <thead>
          <tr>
            <th>No</th>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center p-4">
                No Data
              </td>
            </tr>
          ) : (
            todos.map((todo) => {
              const { id, task, status } = todo;
              return (
                <tr key={id}>
                  <td className="p-2 border text-center">{id}</td>
                  <td className="p-2 border text-center">{task}</td>
                  <td className="p-2 border text-center">
                    {status ? "Done" : "In Progress"}
                  </td>
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => onDelete(id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => onChangeStatus(id)}
                      className="bg-gray-500 text-white px-3 py-1 rounded"
                    >
                      Change Status
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};
{
}
export default TodoTable;
