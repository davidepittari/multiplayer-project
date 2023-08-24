import React from 'react';

function Button(props) {
  const { color } = props;
  let bgColor = "";
  let bgHoverColor = "";

  switch (color) {
    case "none":
      bgColor = "";
      bgHoverColor = "hover:bg-third";
      break;

    default:
      bgColor = "bg-third";
      bgHoverColor = "hover:bg-btnhover";
      break;
  }

  return (
    <button className={`${bgColor} text-white font-bold text-lg px-4 py-2 h-full ${bgHoverColor} transition-all duration-300 text-center`}>
      {props.children}
    </button>
  );
}

export default Button;