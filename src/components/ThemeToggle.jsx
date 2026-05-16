import { useEffect, useState } from "react";

import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  // default theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  // toggle function
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={handleTheme} className="btn btn-circle mr-2 bg-transparent border-[#e5e5e5]">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
