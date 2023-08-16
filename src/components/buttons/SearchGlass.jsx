//REACT
import React, { useState } from "react";

//ICON
import MagGlass from "../svg/MagGlass";
import { Close } from "../svg/miscellaneous/Miscellaneous";

//CSS
import "../../layout/Navbar.css";

function SearchGlass(props) {
  const [searchBar, setSearchBar] = useState(false);

  const openMenu = () => {
    setSearchBar(true);
    console.log(searchBar);
  };

  const closeMenu = () => {
    setSearchBar(false);
    console.log(searchBar);
  };

  return (
    <>
      <button className="flex items-center" onClick={openMenu}><MagGlass height={"1.5em"} /></button>
      {searchBar && (
        <div className="absolute p-2 searchBar bg-third top-0 left-0 w-screen flex flex-row z-10 justify-between">
          <input
            className=" text-white font-bold w-full outline-none"
            placeholder="CERCA NEL SITO..."
            type="text"
          />
          <div className="flex flex-row items-center">
            <button className="px-2 active:scale-90">
              <MagGlass height={"1.5em"} />
            </button>
            <button className="px-2 active:scale-90" onClick={closeMenu}>
              <Close height={"2em"} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchGlass;
