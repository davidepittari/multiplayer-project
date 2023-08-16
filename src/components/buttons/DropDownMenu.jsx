import React, { useState } from "react";

function DropDownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

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
          <ul className="absolute bg-primary border-t-4 border-third w-screen left-0 top-full text-secondary">
            <li>Opzione 1</li>
            <li>Opzione 2</li>
            <li>Opzione 3</li>
          </ul>
        )}
      </li>
    </>
  );
}

export default DropDownMenu;
