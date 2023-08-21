import React from "react";
import "./styles.components.css";
import profileImg from "../assets/avatar_2.jpeg";
import { Bell, Languages, LayoutDashboard, Moon, Search } from "lucide-react";

const Navbar = ({ handleToggle, darkMode }) => {
  return (
    <div className="p-5">
      <div className={`navbar ${darkMode ? "bg-black" : "bg-white"}`}>
        <div className="flex items-center gap-5 text-gray-500">
          <Search id="search" color="black" />
          <label htmlFor="search">Search</label>
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <Languages />
          <Moon onClick={handleToggle} />
          <LayoutDashboard />
          <Bell />
          <img src={profileImg} alt="" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
