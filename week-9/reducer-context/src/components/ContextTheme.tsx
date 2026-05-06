import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const Content = () => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  const { theme, toggleTheme } = context;

  return (
    <div>
      <h2>Current Theme: {theme}</h2>

      <button
        className="p-2 bg-gray-100 hover:bg-gray-300 rounded-lg"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default function ContextTheme() {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <h1>useContext Theme</h1>

      <ThemeProvider>
        <Content />
      </ThemeProvider>
    </div>
  );
}
