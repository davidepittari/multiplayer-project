import React from "react";
import adsImage from "../../assets/img/ads_pattern.png";

function AdsPlace() {
  return (
    <div className="lg:hidden min-h-[600px] w-screen bg-sixth bg-repeat m-1" style={{backgroundImage:`url(${adsImage})`}}>
    </div>
  );
}

export default AdsPlace;
