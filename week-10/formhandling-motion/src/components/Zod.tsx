import React from "react";

const Zod = () => {
  return (
    <div>
      <div>Zod Basic</div>
    </div>
  );
};

export default Zod;

/**
Apa itu Zod?
Zod adalah library untuk validasi data di JavaScript/TypeScript.

SEBELUM MENGGUNAKAN ZOD
const user = {
  name: "Vincent",
  age: 20,
};

if (typeof user.name !== "string") {
  console.log("Name harus string");
}

if (typeof user.age !== "number") {
  console.log("Age harus number");
}

SETELAH MENGGUNAKAN ZOD
import { z } from "zod";
const UserSchema = z.object({
   name: z.string(),
   age: z.number(),
});

const result = UserSchema.safeParse({
   name: "Vincent",
   age: 20,
});

console.log(result);

 */
