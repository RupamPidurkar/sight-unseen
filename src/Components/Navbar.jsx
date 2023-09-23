import React from "react";
import search from "../images/search.png";
import user from "../images/user.png";
import hamburger from "../images/hamburger.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between lg:px-8 px-4 py-4 bg-[#E5E0D8]">
      <p className="text-[#203522] font-bold text-2xl leading-[17px] font-serif text-center">
        <span className="ml-[10px]">Sight</span>
        <br />
        <span>Unseen</span>
      </p>

      <span className="lg:flex hidden justify-between gap-8 font-ayar">
        <a href="">SPACES</a>
        <a href="">OBJECTS</a>
        <a href="">LIBRARY</a>
        <a href="">HOT LIST</a>
        <a href="">OUR SERVICES</a>
        <a href="">SHOP</a>
      </span>

      <span className="flex gap-6">
        <img src={search} alt="" className="h-6" />
        <img src={user} alt="" className="h-6" />
        <img src={hamburger} alt="" className="h-6" />
      </span>
    </nav>
  );
};

export default Navbar;
