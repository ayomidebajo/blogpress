import React from "react";

//outputting posts on the dashboard
const PostSummary = ({ post }) => {
  return (
    <div className="container">
      <div className="row s4 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <div className="post--container">{post.content}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostSummary;
