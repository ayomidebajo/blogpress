import React from "react";
import PostSummary from "./PostSummary";
import PostData from "../../data/data.json";
// import { Link } from "react-router-dom";

//lists of posts
const PostList = () => {
  return (
    <div className="container">
      <div className="blog--post__container">
        {PostData.map(post => {
          return (
            <div className="projects-section">
              <span className="project--card">
                <PostSummary post={post} key={post.id} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
