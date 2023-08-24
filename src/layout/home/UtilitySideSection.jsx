//REACT
import React from "react";

//UTILITY
import { Surveys, LastReview } from "./utility/Utility";

//COMPONENTS
import AdsPlace from "../../components/other/AdsPlace";

//JSON TEST
import reviewTest from "../../assets/json/Review.json"

function UtilitySideSection() {
  return (
    <div className="hidden lg:flex flex-col w-1/2 h-fit bg-primary">
      <Surveys>DOMANDA SONDAGGIO CON PUNTO INTERROGATIVO?</Surveys>
      <AdsPlace desktop={true}/>
      <LastReview listReviews={reviewTest}/>
      <AdsPlace desktop={true}/>
    </div>
  );
}

export default UtilitySideSection;
