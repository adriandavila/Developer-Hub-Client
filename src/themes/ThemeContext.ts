import { createContext } from "react";

const localStorageTheme = localStorage.getItem("selectedTheme");
export const ThemeContext = createContext({
  theme: localStorageTheme ? localStorageTheme : "dark",
  setTheme: (newTheme: "light" | "dark") => {},
});
