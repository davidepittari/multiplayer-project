//REACT
import React from "react";

//ICON
import { Comment } from "../svg/miscellaneous/Comment";

//IMG
import img from "../../assets/img/frost-planet-concept-art.jpeg";

//CSS
import "./ArticleCard.css";
import CommentBubble from "../other/CommentBubble";

function ArticleCard({ title, category, tag, comment, main }) {
  return (
    <article className={`relative min-w-[70vw] ${main ? "h-screen-vw"  : "min-h-[75vw] snap-center"}`}>
      <CommentBubble comment={comment} />
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
        <h1 className="text-2xl m-2 px-2 leading-none text-white">
          {title}
        </h1>
      </div>
    </article>
  );
}

export default ArticleCard;
