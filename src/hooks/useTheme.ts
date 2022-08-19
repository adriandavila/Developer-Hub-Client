import { useContext } from "react";
import { ThemeContext } from "src/themes/ThemeContext";

export const useTheme = () => {
  return useContext(ThemeContext);
};
