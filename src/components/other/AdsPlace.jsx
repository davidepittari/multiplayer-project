import React from "react";
import adsImage from "../../assets/img/ads_pattern.png";

function AdsPlace({ desktop }) {
  return (
    <>
      <div
        id="mobile"
        className="lg:hidden min-h-[600px] w-screen bg-sixth bg-repeat m-1 opacity-20"
        style={{ backgroundImage: `url(${adsImage})` }}
      ></div>
      {desktop && (
        <div
          id="desktop"
          className="min-h-[600px] bg-sixth bg-repeat m-1 opacity-30"
          style={{ backgroundImage: `url(${adsImage})` }}
        ></div>
      )}
    </>
  );
}

export default AdsPlace;
