import React from "react";
import PostSummary from "./PostSummary";
import { useFirebaseConnect } from "react-redux-firebase";
// import PostData from "../../data/data.json";
// import { Link } from "react-router-dom";
// import Post from '../../store/reducers/postReducer';

//lists of posts
const PostList = ({ posts }) => {
  useFirebaseConnect([{ path: "posts" }]);

  console.log(this.props, "just wanna know");

  return (
    <div className="container">
      <div className="blog--post__container">
        {posts &&
          posts.map((post) => {
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
