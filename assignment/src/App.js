import React, { useState } from "react";
import SideNavbar from "./components/sidenavbar.components/SideNavbar";
import Navbar from "./components/navbar.components/Navbar";
import Main from "./components/main.components/Main";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`${
        darkMode === true ? "text-white bg-black" : "text-black bg-white"
      } flex`}
    >
      <SideNavbar darkMode={darkMode} />
      <div className="ml-[20rem]">
        <Navbar handleToggle={handleToggle} darkMode={darkMode} />
        <Main />
      </div>
    </div>
  );
};

export default App;
