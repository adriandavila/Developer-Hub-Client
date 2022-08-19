import { createContext } from "react";

const localStorageTheme = localStorage.getItem("selectedTheme");
export const ThemeContext = createContext({
  theme: localStorageTheme ? localStorageTheme : "light",
  setTheme: (newTheme: "light" | "dark") => {},
});
