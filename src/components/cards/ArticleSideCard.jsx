//REACT
import React from "react";

//IMG
import img from "../../assets/img/frost-planet-concept-art.jpeg";

//COMPONENTI
import CommentBubble from "../other/CommentBubble";

function ArticleSideCard({
  timing,
  category,
  tag,
  title,
  comment,
  imagePresent,
}) {
  return (
    <>
      <article className="h-fit max-w-xs m-3">
        <div className="flex flex-col my-2">
          <figure className="relative flex items-center justify-center w-full h-32 mr-4">
            <img className="w-full h-full object-cover" src={img} alt="img" />
            <CommentBubble comment={comment} />
          </figure>

          <div className="w-full flex flex-col justify-center">
            <span className="flex flex-row text-xs tracking-tighter text-white font-bold my-2">
              <p>
                <span className="text-fourth">{category} |</span>
                <span className="text-third pl-1">{tag}</span>
              </p>
            </span>
            <p className="text-white text-base font-semibold leading-5">
              {title}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

export default ArticleSideCard;
