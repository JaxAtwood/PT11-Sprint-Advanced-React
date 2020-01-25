import React from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [newValue, setValue] = useLocalStorage("dark-mode");
  React.useEffect(() => {
    const body = window.document.body;
    if (newValue) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [newValue]);

  return [newValue, setValue];
};