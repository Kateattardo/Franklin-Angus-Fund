import React, { useState, UseEffect } from "react";
import { FaFacebookF, FaInstagram, FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
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
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div>
        <FaFacebookF className="mx-4" />
        <FaInstagram className="mx-4" />
      </div>
      {/*Hamburger Icon*/}
      <div>
        <FaBars />
      </div>
      {/*Mobil Menu*/}
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
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
