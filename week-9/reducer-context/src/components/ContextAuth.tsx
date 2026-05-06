import { createContext, useContext, useState } from "react";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    setUser({
      name: "Vincent",
      email: "vincent@mail.com",
    });
    console.log("User logged in");
  };

  const logout = () => {
    setUser(null);
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const Content = () => {
  const context = useContext(AuthContext);

  if (!context) return null;

  const { user, login, logout } = context;

  return (
    <div>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          <button
            className="p-2  rounded-lg bg-red-700 text-white hover:bg-red-800"
            onClick={logout}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="p-2 bg-blue-700 text-white hover:bg-blue-800 rounded-lg"
          onClick={login}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default function ContextAuth() {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <h1>useContext Auth</h1>

      <AuthProvider>
        <Content />
      </AuthProvider>
    </div>
  );
}
