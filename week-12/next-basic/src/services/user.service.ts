import { api } from "./api";

import { type User } from "@/types";

export async function getUsers(): Promise<User[]> {
   const response = await api.get("/users");

   return response.data;
}

export async function loginUser(
   username: string,
   password: string
): Promise<User> {
   const users = await getUsers();


   const userFound = users.find(
      (user) =>
         user.username === username &&
         user.password === password
   );
   console.log(userFound);
   if (!userFound) {
      throw new Error("Username atau password salah");
   }

   localStorage.setItem("user", JSON.stringify(userFound));
   localStorage.setItem("token", `fake-token-${userFound.id}`);

   return userFound;
}