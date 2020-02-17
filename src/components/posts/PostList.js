import React from "react";
import PostSummary from "./PostSummary";
// import { Link } from "react-router-dom";

//lists of posts
const PostList = ({ posts }) => {
  return (
    <div className="container">
      <div className="blog--card__container">
        {posts &&
          posts.map(post => {
            return (
              <div className="projects-section">
                
                {/* <Link to={"/post/" + post.id}> */}
                  <span className="project--card"><PostSummary post={post} key={post.id} /></span>
                {/* </Link> */}
                
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PostList;
