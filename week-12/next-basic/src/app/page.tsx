"use client";

import { useEffect, useState } from "react";

import Login from "./auth/Login";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
  };

  return (
    <div className="space-y-5">
      <h1 className="text-4xl font-bold">Fake Store App</h1>

      <p>Belajar Next.js App Router</p>

      {isLoggedIn ? (
        <div className="rounded-lg border p-5 space-y-4">
          <h2 className="text-2xl font-semibold">Welcome Back 👋</h2>

          <p>Kamu sudah login</p>

          <button
            onClick={handleLogout}
            className="rounded-lg bg-red-500 px-4 py-2 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <Login onLogin={checkLoginStatus} />
      )}
    </div>
  );
}
