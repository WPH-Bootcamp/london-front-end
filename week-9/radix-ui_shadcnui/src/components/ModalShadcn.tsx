// npm i @types/node path
// npm i clsx tailwind-merge
// pastikan install ini terlebih dulu

import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ModalShadcn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="
              bg-purple-500
              hover:bg-purple-600
              text-white
              rounded-2xl
              px-6
              py-3
              shadow-xl
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Open Modal
          </Button>
        </DialogTrigger>

        <DialogContent
          className="
            rounded-3xl
            border-0
            shadow-2xl
            p-8
            bg-white
          "
        >
          <DialogHeader>
            <DialogTitle
              className="
                text-3xl
                font-bold
                text-purple-600
              "
            >
              Welcome 👋
            </DialogTitle>
          </DialogHeader>

          <p className="text-gray-600 mt-2">
            Ini contoh customize shadcn/ui menggunakan Tailwind CSS.
          </p>

          <div className="flex justify-end mt-6">
            <Button
              className="
                bg-black
                hover:bg-gray-800
                rounded-xl
              "
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ModalShadcn;
