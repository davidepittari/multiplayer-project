//REACT
import React from "react";

import { Comment } from "../svg/miscellaneous/Comment";

function CommentBubble({comment}) {
  return (
    <>
      <figure className="absolute comment-card top-0 right-0 px-1 bg-third rounded-bl flex flex-row items-center justify-center text-white font-bold z-10">
        <Comment height="1em" />
        <p className="pl-1">{comment}</p>
      </figure>
    </>
  );
}

export default CommentBubble;
