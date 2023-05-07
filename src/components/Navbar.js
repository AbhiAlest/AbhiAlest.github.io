import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--background-color", "#fff");
      root.style.setProperty("--text-color", "#333");
    } else {
      root.style.setProperty("--background-color", "#333");
      root.style.setProperty("--text-color", "#fff");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="navbar__logo" />
        </Link>
        <div className="navbar__gap" style={{ width: "500px" }} />
        <Link to="/">Home</Link>
        <Link to="/profile">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div className="navbar__right">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
