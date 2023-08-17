//REACT
import React from "react";

//ICON
import { Comment } from "../svg/miscellaneous/Comment";

//IMG
import img from "../../assets/img/frost-planet-concept-art.jpeg";

//CSS
import "./ArticleCard.css";

function ArticleCard({title, category, tag, comment}) {
  return (
    <article className="relative h-screen-vh w-fit">
      <figure className="absolute comment-card top-0 right-0 px-1 bg-third rounded-bl flex flex-row items-center justify-center text-white font-bold z-10">
        <Comment height="1em" />
        <p className="pl-1">{comment}</p>
      </figure>
      <figure className="h-full bg-black image-container">
        <img
          className="block h-3/4 object-cover object-center"
          src={img}
          alt="img"
        ></img>
      </figure>
      <div className="absolute bottom-0 mb-4 font-bold">
        <div className="flex flex-row text-sm mx-2">
          <p className="px-2 text-fourth">{category}</p>
          <p className="text-fifth">{tag}</p>
        </div>
        <h1 className="text-2xl m-2 px-2 tracking- leading-none text-white">{title}</h1>
      </div>
    </article>
  );
}

export default ArticleCard;
