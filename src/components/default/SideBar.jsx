import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../utils/categorySlice";
import { Link, useLocation } from "react-router-dom";
import { sideBarClose } from "../../utils/toggleSlice";

const SideBar = () => {
  const menu = useSelector((store) => store.toggle.isMenuOpen);
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();

  // Function to handle category click
  const handleClick = (cid) => {
    dispatch(setCategory(cid));
    dispatch(sideBarClose(false));
  };

  const categories = [
    { name: "Home", categoryId: "", icon: "ri-global-line" },
    { name: "Game", categoryId: "20", icon: "ri-gamepad-line" },
    { name: "Sports", categoryId: "17", icon: "ri-football-line" },
    { name: "Entertainment", categoryId: "24", icon: "ri-film-line" }, // Replacing "Movies"
    { name: "Music", categoryId: "10", icon: "ri-music-line" }, // Keeping "Songs" as "Music"
    { name: "People", categoryId: "22", icon: "ri-user-3-line" }, // Replacing "Education"
    { name: "Comedy", categoryId: "23", icon: "ri-emotion-laugh-line" },
    { name: "News", categoryId: "25", icon: "ri-news-line" }, // Replacing "Drama"
    { name: "Pets", categoryId: "15", icon: "ri-bear-smile-line" }, // Replacing "Horror"
    { name: "Science", categoryId: "28", icon: "ri-lightbulb-line" }, // Replacing "Travel"
  ];

  // If the menu is closed, return the smaller sidebar layout
  if (!menu) {
    return (
      <div
        className={`bg-white h-[90vh] w-[17vw] md:w-[5vw] shadow-2xl pt-1 md:py-2 pl-2 md:px-1 border-r md:border-r-0 ${
          pathname.includes("watch") ? "hidden" : "md:flex"
        } flex-col gap-5 md:gap-0 border-slate-300`}
      >
        {categories.map((c, i) => (
          <Link key={i} to="/">
            <div
              onClick={() => handleClick(c.categoryId)}
              className="w-full h-[5vh] md:h-[7vh] rounded-md hover:bg-slate-200 mb-5 md:mb-2 flex flex-col items-center pb-1 cursor-pointer"
            >
              <i className={`${c.icon} text-sm md:text-xl`}></i>
              <h3 className=" text-[9px] md:text-[10px] font-thin text-center">{c.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  // If the menu is open, return the larger sidebar layout
  return (
    <div
      className={`bg-white h-[90vh] w-[28vw] md:w-[15vw] shadow-2xl pt-1 md:py-2 px-1 ${
        pathname.includes("watch") ? "absolute z-10" : "static"
      }`}
    >
      {categories.map((c, i) => (
        <Link key={i} to="/">
          <div
            onClick={() => handleClick(c.categoryId)}
            className="w-full h-[5vh] md:h-[7vh] rounded-md hover:bg-slate-200 my-2 flex gap-1 md:gap-4 items-center pl-2 cursor-pointer"
          >
            <i className={`${c.icon} text-sm md:text-xl`}></i>
            <h3 className="text-xs md:text-lg font-thin">{c.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
