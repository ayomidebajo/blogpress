import React from "react";

//outputting posts on the dashboard
const PostSummary = ({ post }) => {
  return (
    <div className="cards--container">
      <div className="image-and-stroke">
        <div className="image-de"></div>
      </div>
      <div className="card-content">
        <h5>{post.title}</h5>
        <p className="content">{post.content}</p>
      </div>
    </div>
  );
};
export default PostSummary;
