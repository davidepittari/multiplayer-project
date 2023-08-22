//REACT
import React from "react";

//ICON
import {
  Facebook,
  Twitch,
  Twitter,
  Youtube,
  Instagram,
  Feed,
} from "../svg/social/Social";

function Social({height}) {

  return (
    <div className="flex justify-evenly mx-12">
      <Facebook height={height} />
      <Twitter height={height}  />
      <Instagram height={height}  />
      <Twitch height={height}  />
      <Youtube height={height}  />
      <Feed height={height}  />
    </div>
  );
}

export default Social;
