//REACT
import React from "react";

//UTILITY
import { Surveys, LastReview, MostAnticipeted, ContactForm, MostTrandingNews } from "./utility/Utility";

//COMPONENTS
import AdsPlace from "../../components/other/AdsPlace";

//JSON TEST
import reviewTest from "../../assets/json/Review.json";
import gamesTest from "../../assets/json/Games.json";
import newsTest from "../../assets/json/News.json";

function UtilitySideSection() {
  return (
    <div className="hidden lg:flex flex-col w-1/2 h-full bg-primary">
      <Surveys>DOMANDA SONDAGGIO CON PUNTO INTERROGATIVO?</Surveys>
      <AdsPlace desktop={true}/>
      <LastReview listReviews={reviewTest}/>
      <AdsPlace desktop={true}/>
      <MostAnticipeted listNextGames={gamesTest}/>
      <AdsPlace desktop={true}/>
      <ContactForm/>
      <MostTrandingNews listNews={newsTest}/>
    </div>
  );
}

export default UtilitySideSection;
