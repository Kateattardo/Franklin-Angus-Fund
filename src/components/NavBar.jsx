import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-grey-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#application">Application</a>
        </li>
        <li>
          <a href="#benificiaries">Benificiaries</a>
        </li>
        <li>
          <a href="#donations">Donations</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebookF className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      {/*Hamburger Icon */}
      <div className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/*Mobile Menu */}
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#application">Application</a>
          </li>
          <li>
            <a href="#benificiaries">Benificiaries</a>
          </li>
          <li>
            <a href="#donations">Donations</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
