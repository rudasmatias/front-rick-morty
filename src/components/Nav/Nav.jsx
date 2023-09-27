import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch }) {
  return (
    <div className="flex ">
      <ul className="flex text-center items-center mr-2 text-lg ">
        <NavLink to="/home">
          <li className="text-blue-800 font-bold text-2xl"> Home </li>
        </NavLink>

        <NavLink to="/about">
          <li className="ml-10 mr-10 text-blue-800 font-bold text-2xl">
            {" "}
            About{" "}
          </li>
        </NavLink>

        <NavLink to="/favorites">
          <li className="text-blue-800 font-bold text-2xl"> Favorites </li>
        </NavLink>
      </ul>

      <SearchBar onSearch={onSearch} />
    </div>
  );
}
