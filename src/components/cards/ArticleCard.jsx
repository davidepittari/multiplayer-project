//REACT
import React from "react";

//ICON
import { Comment } from "../svg/miscellaneous/Comment";

//IMG
import imgLocal from "../../assets/img/frost-planet-concept-art.jpeg";

//CSS
import "./ArticleCard.css";
import CommentBubble from "../other/CommentBubble";

function ArticleCard({ title, category, tag, comment, main, img }) {
  return (
    <article
      className={`relative article-card ${
        main
          ? "h-[75vw] lg:h-[350px]"
          : "min-w-[70vw] min-h-[50vw] lg:min-w-[25%] lg:min-h-[350px] lg:h-[350px] snap-center"
      }`}
    >
      <CommentBubble comment={comment} />
      <figure className="h-full bg-black image-container">
        <img
          className="block h-3/4 w-full object-cover object-center"
          src={imgLocal}
          alt="img"
        ></img>
      </figure>
      <div className="absolute bottom-0 mb-4 font-bold">
        <div className="flex flex-row text-sm mx-2">
          <p className="px-2 text-fourth">{category}</p>
          <p className="text-fifth">{tag}</p>
        </div>
        <h1 className="text-xl m-2 px-2 leading-5 text-white">{title}</h1>
      </div>
    </article>
  );
}

export default ArticleCard;
