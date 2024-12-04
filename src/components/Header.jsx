import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="py-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md fixed top-0 inset-x-0 z-10">
      <div className="flex justify-between items-center px-4">
        <h1 className="font-bold text-3xl uppercase text-gray-900 dark:text-gray-100">
          CodeHelp - Blogs
        </h1>
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;
