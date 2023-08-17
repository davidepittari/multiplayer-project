//REACT
import React from "react";

//IMG
import img from "../../assets/img/frost-planet-concept-art.jpeg";

//COMPONENTI
import CommentBubble from "../other/CommentBubble";

//CSS
import "./NewsCard.css";

function NewsCard({ timing, category, tag, title, comment }) {
  return (
    <>
      <article className="flex flex-row p-4">
        <figure className="relative flex items-center justify-center w-48 h-32 mr-4">
          <img className="w-full h-full object-cover" src={img} alt="img" />
          <CommentBubble comment={comment} />
        </figure>
        <div className="w-full flex flex-col justify-center">
          <span className="flex flex-row text-xs text-white font-bold mb-2">
            <p>
              <span className="text-[#666666]">{timing} |</span>
              <span className="text-fourth pl-1">{category} |</span>
              <span className="text-third pl-1">{tag}</span>
            </p>
          </span>
          <p className="text-white font-bold leading-tight">{title}</p>
        </div>
      </article>
      <div className="h-[1px] bg-[#262626] my-1 mx-4"></div>
    </>
  );
}

export default NewsCard;
