import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Menu
      </button>

      {open && (
        <div className="absolute mt-2 w-40 bg-white border rounded shadow">
          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Profile
          </button>

          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Settings
          </button>

          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
