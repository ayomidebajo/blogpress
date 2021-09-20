import React from "react";
import PostSummary from "./PostSummary";
import { useState, useEffect } from "react";
import Spinner from "../../img/Spinner.gif";

//lists of posts
const PostList = ({ posts }) => {
  console.log(posts, "just wanna know");
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    posts ? setShowSpinner((state) => false) : setShowSpinner((state) => true);
  }, [posts]);

  if (showSpinner) {
    return (
      <div className="spinner--container">
        <img src={Spinner} alt="" width="25%" className="spinner" />
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="blog--post__container">
          {posts &&
            posts.map((post) => {
              return <PostSummary post={post} key={post.id} />;
            })}
        </div>
      </div>
    );
  }
};

export default PostList;
