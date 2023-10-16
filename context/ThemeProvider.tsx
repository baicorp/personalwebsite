"use client";

import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

export const ThemeContext = createContext({
  theme: "",
  setTheme: (theme: string) => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    setTheme(localTheme ?? "light");
    setLoading(false);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  if (loading) {
    return <body></body>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
