//REACT
import React from "react";

//IMG
import img from "../../assets/img/frost-planet-concept-art.jpeg";

//COMPONENTI
import CommentBubble from "../other/CommentBubble";

//CSS
import "./NewsCard.css";

function NewsCard({ timing, category, tag, title, comment, imagePresent }) {
  return (
    <>
      <article className="h-fit md:w-full">
        <div className="flex flex-row my-2">
          {imagePresent ? (
            <figure className="relative flex items-center justify-center w-48 h-32 mr-4">
              <img className="w-full h-full object-cover" src={img} alt="img" />
              <CommentBubble comment={comment} />
            </figure>
          ) : (
            ""
          )}

          <div className="w-full flex flex-col justify-center">
            <span className="flex flex-row text-xs  tracking-tighter text-white font-bold mb-2">
              <p>
                <span className="text-eight">{timing} |</span>
                <span className="text-fourth pl-1">{category} |</span>
                <span className="text-third pl-1">{tag}</span>
              </p>
            </span>
            <p className="text-white md:text-xl md:font-semibold font-bold leading-tight">{title}</p>
          </div>
        </div>
        <div className="h-[1px] bg-[#262626] my-1 mx-4 md:hidden lg:flex lg:m-0"></div>
      </article>
    </>
  );
}

export default NewsCard;
