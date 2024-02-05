import { createContext, FC, useEffect, useState } from "react";
import { Theme } from "types/general";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme as Theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "light" : "dark"}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
