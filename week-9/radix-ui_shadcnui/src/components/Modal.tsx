import React, { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="py-2 px-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-300"
      >
        Click Me
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-5 rounded">
            <h1 className="text-xl font-bold">Hello</h1>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
