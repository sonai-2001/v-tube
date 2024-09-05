import React from "react";
import { useDispatch } from "react-redux";
import { sideBarToggler } from "../../utils/toggleSlice";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  //o
  // toggler
  const handleClick = () => {
    dispatch(sideBarToggler());
  };

  return (
    <div className="  w-full h-[10vh] flex items-center justify-between px-2 md:px-4 shadow-lg">
      {/* logo and menubutton part  */}
      <div className="flex items-center  md:gap-2">
        <i
          onClick={handleClick}
          className="ri-menu-line text-3xl cursor-pointer"
        ></i>
        <Link to="/">
          <img
            className="h-[60px] w-[80px] md:w-[100px]"
            src="view_tube.png"
            alt=""
          />
        </Link>{" "}
      </div>
      {/*  search part */}
      <div className="">
        <input
          className="border-[2px] outline-none w-[30vw] px-2 text-center rounded-l-full"
          placeholder="search here"
          type="text"
        />
        <button className="px-2  border-l-0 border-[2px] rounded-r-full">
          <i className="ri-search-line"></i>
        </button>
      </div>

      {/* user profile part */}
      <div>
        <img className="h-[30px] w-[30px]" src="user.png" alt="" />
      </div>
    </div>
  );
};

export default NavBar;
