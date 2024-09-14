//demo
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { sideBarToggler } from "../../utils/toggleSlice";
import { Link, useNavigate } from "react-router-dom";
import { SUGGETION_API, user_profile, video_logo } from "../../utils/api";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchPairs, setSearchPairs] = useState([]);
  const [items, setItems] = useState([]);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    if (search.trim() === "") {
      return;
    }
    
    // Check if search term is already in the cache
    const index = searchPairs.findIndex((item) => item[search]);
    if (index !== -1) {
      // If found, use cached data
      setItems(searchPairs[index][search]);
    } else {
      // Clear any existing timer
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      // Set a new timer to debounce the API call
      const newTimeout = setTimeout(() => {
        getData();
      }, 500);

      setDebounceTimeout(newTimeout);
    }
    
    // Cleanup timeout on unmount or when search changes
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [search]);

  const getData = async () => {
    console.log("Fetching new data...");
    const raw = await fetch(`${SUGGETION_API}${encodeURIComponent(search)}`);
    const data = await raw.json();
    console.log(data[1]);

    // Save the fetched data and cache it
    setItems(data[1]);
    setSearchPairs([...searchPairs, { [search]: data[1] }]);
  };

  // Toggler
  const handleClick = () => {
    dispatch(sideBarToggler());
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(searchPairs);
  return (
    <div className="w-full h-[10vh] flex items-center justify-between px-2 md:px-4 shadow-lg">
      {/* Logo and menu button */}
      <div className="flex items-center md:gap-2">
        <i
          onClick={handleClick}
          className="ri-menu-line text-3xl cursor-pointer"
        ></i>
        <Link to="/">
          <img
            className="h-[60px] w-[80px] md:w-[100px]"
            src={video_logo}
            alt=""
          />
        </Link>
      </div>
      
      {/* Search part */}
      <div className="relative">
        <form
          onSubmit={() => {
            navigate(`/search/${search}`);
            setSearch("");
          }}
        >
          <input
            className="border-[2px] outline-none w-[30vw] px-2 text-center rounded-l-full"
            placeholder="Search here"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <button className="px-2 border-l-0 border-[2px] rounded-r-full">
            <i className="ri-search-line"></i>
          </button>
        </form>

        {search.trim().length > 0 && (
          <span
            onClick={() => setSearch("")}
            className="absolute top-0 cursor-pointer right-9 text-lg"
          >
            <i className="ri-close-line"></i>
          </span>
        )}
        <div className="w-full bg-white top-[100%] max-h-[50vh] absolute ">
          {search.trim().length > 0 &&
            items &&
            items.map((i, index) => {
              return (
                <Link
                  onClick={() => setSearch("")}
                  to={`search/${i}`}
                  key={index}
                >
                  <div className="w-full h-[40px] border-b pl-2 bg-slate-100 shadow-lg">
                    {i}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>

      {/* User profile part */}
      <div>
        <img className="h-[30px] w-[30px]" src={user_profile} alt="User" />
      </div>
    </div>
  );
};
//just to check

export default NavBar;
