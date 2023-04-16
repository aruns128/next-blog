import React, { useState } from "react";
import { DarkTheme } from "./DarkTheme";

const loadDarkMode = () => {
  if (typeof localStorage === "undefined") {
    return false;
  }
  const value = localStorage.getItem("darkMode");
  return value === null ? false : JSON.parse(value);
};

export const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(loadDarkMode);
  const handleClick = () => {
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  };

  const text = darkMode ? "Light Mode" : "Dark Mode";
  return (
    <>
      <button onClick={handleClick}>{text}</button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            color: inherit;
            cursor: pointer;
          }
        `}
      </style>
      {darkMode && <DarkTheme />}
    </>
  );
};
