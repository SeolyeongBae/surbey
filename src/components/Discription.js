import React from "react";

function Discription({ post }) {
  return (
    <div>
      <div>
        <img src={post.thumbnailUrl}></img>
        <div> Title : {post.title}</div>
      </div>
    </div>
  );
}

export default Discription;
