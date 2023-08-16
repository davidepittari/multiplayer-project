//REACT
import React, { useState } from "react";

//ICON
import {
  Xbox,
  PlayStation,
  NintendoSwitch,
  PcGaming,
  Android,
  Ios,
  GoogleStadia,
  AllPlatform,
} from "../svg/platform/Platform";

import { Star, News, Video, Live, Games } from "../svg/miscellaneous/Miscellaneous";

function DropDownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const heightIcon = "1.5em"

  const dropMenuSectionMain = [
    { text: "RECENSIONI", icon: <Star height={heightIcon} /> },
    { text: "NEWS", icon: <News height={heightIcon} /> },
    { text: "VIDEO", icon: <Video height={heightIcon} /> },
    { text: "LIVE", icon: <Live height={heightIcon} /> },
    { text: "GIOCHI", icon: <Games height={heightIcon} /> },
  ];

  const dropMenuSectionPlatform = [
    { text: "TUTTE", icon: <AllPlatform height={"1em"} /> },
    { text: "PC", icon: <PcGaming height={"1em"} /> },
    { text: "PLAYSTATION 5", icon: <PlayStation height={"1em"} /> },
    { text: "PLAYSTATION 4", icon: <PlayStation height={"1em"} /> },
    { text: "XBOX ONE", icon: <Xbox height={"1em"} /> },
    { text: "XBOX SERIES X", icon: <Xbox height={"1em"} /> },
    { text: "NINTENDO SWITCH", icon: <NintendoSwitch height={"1em"} /> },
    { text: "IOS", icon: <Ios height={"1em"} /> },
    { text: "ANDROID", icon: <Android height={"1em"} /> },
    { text: "GOOGLE STADIA", icon: <GoogleStadia height={"1em"} /> },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        className={`relative flex flex-col p-2 menu cursor-pointer h-full justify-center items-center ${
          isOpen ? "bg-third" : ""
        }`}
      >
        <button className="relative" onClick={toggleMenu}>
          {props.children}
        </button>
        {isOpen && (
          <ul className="absolute flex flew-row flex-wrap bg-sixth border-t-4 border-third w-screen left-0 top-full text-secondary font-bold tracking-tighter p-2">
            {dropMenuSectionMain.map((item) => (
              <li className="w-1/2 pr-2 py-2 flex flex-row items-center">
                <div className="pr-1">{item.icon}</div>
                <div className="hover:underline">{item.text}</div>
              </li>
            ))}
            <div className="w-full bg-primary h-[0.5px] m-2" />
            {dropMenuSectionPlatform.map((item) => (
              <li className="w-1/2 pr-2 py-2 flex flex-row items-center">
                <div className="pr-1">{item.icon}</div>
                <div className="hover:underline">{item.text}</div>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
}

export default DropDownMenu;
