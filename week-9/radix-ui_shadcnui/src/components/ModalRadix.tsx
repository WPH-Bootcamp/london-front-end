import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const ModalRadix = () => {
  return (
    <div>
      <div>Modal Radix</div>
      <Dialog.Root>
        <Dialog.Trigger className="py-2 px-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition-colors duration-300">
          Open Modal
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 bg-white p-5 rounded -translate-x-1/2 -translate-y-1/2">
            <Dialog.Title className="text-xl font-bold">Hello</Dialog.Title>
            <Dialog.Close className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default ModalRadix;
