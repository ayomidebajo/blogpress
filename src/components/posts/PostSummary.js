import React from "react";

//outputting posts on the dashboard
const PostSummary = ({ post }) => {
  return (
    <div className="post--container">
      <div>
        <div className="blog--post">
          <div className="image--container" />
          <span className="title">{post.title}</span>
          <p className="content">{post.content}</p>

          <button className="posts-btn">Read more</button>
        </div>
      </div>
    </div>
  );
};
export default PostSummary;
