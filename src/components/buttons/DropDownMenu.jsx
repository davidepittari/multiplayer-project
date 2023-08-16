import React, { useState } from "react";

function DropDownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const dropMenuSectionMain = ["RECENSIONI", "NEWS", "VIDEO", "LIVE", "GIOCHI"];
  const dropMenuSectionPlatform = ["TUTTE", "PC", "PLAYSTATION 5", "PLAYSTATION 4", "XBOX ONE", "XBOX SERIES X", "NINTENDO SWITCH", "IOS", "ANDROID", "GOOGLE STADIA"];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li className={`relative flex flex-col p-2 menu cursor-pointer h-full justify-center items-center ${isOpen ? "bg-third" : ""}`}>
        <button className="relative" onClick={toggleMenu}>
          {props.children}
        </button>
        {isOpen && (
          <ul className="absolute flex flew-row flex-wrap bg-[#181818] border-t-4 border-third w-screen left-0 top-full text-secondary">
            {dropMenuSectionMain.map((item) => 
                <li className="w-1/2 px-4 py-2">{item}</li>
            )}
            <div className="w-full bg-primary h-[0.5px] m-4"/>
            {dropMenuSectionPlatform.map((item) => 
                <li className="w-1/2 px-4 py-2">{item}</li>
            )}
          </ul>
        )}
      </li>
    </>
  );
}

export default DropDownMenu;
