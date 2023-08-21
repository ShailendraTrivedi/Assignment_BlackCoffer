import React from "react";
import "./styles.sidenavbar.css";
import { ChevronRight } from "lucide-react";
const SideNavbar = ({ darkMode }) => {
  return (
    <div className={`sidenavbar ${darkMode ? "bg-black" : "bg-white"}`}>
      <div className="flex items-center gap-3">
        <span className="onechar">A</span>
        <p className="text-3xl">Assignment</p>
      </div>
      <ul className="flex flex-col gap-5">
        <li className="list">
          <span>Dashboard</span>
          <ChevronRight />
        </li>
        <li className="list cursor-not-allowed">
          <span>Email</span>
          <ChevronRight />
        </li>
        <li className="list cursor-not-allowed">
          <span>Chat</span>
          <ChevronRight />
        </li>
        <li className="list cursor-not-allowed">
          <span>Calender</span>
          <ChevronRight />
        </li>
        <li className="list cursor-not-allowed">
          <span>User</span>
          <ChevronRight />
        </li>
        <li className="list cursor-not-allowed">
          <span>Pages</span>
          <ChevronRight />
        </li>
        <li className="list cursor-not-allowed">
          <span>Authentication</span>
          <ChevronRight />
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
