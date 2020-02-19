import React from "react";
import { Link } from "react-router-dom";
import PostList from "../../posts/PostList";
import Logo from "../../../logo.svg";

const Tech = ({ posts }) => {
  return (
    <div>
      <Link to="/" className="brand-logo">
        <img src={Logo} alt="logo" />
      </Link>
      <PostList posts={posts} />
    </div>
  );
};

export default Tech;
