import React from "react";
import PostList from "../../posts/PostList";
import Navbar from "../../layouts/navbar/Navbar";

const Tech = ({ posts }) => {
  return (
    <div>
      <Navbar />
      <PostList posts={posts} />
    </div>
  );
};

export default Tech;
