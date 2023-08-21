import React from "react";
import adsImage from "../../assets/img/ads_pattern.png";

function AdsPlace() {
  return (
    <div className="min-h-[600px] bg-repeat" style={{backgroundImage:`url(${adsImage})`}}>
    </div>
  );
}

export default AdsPlace;
