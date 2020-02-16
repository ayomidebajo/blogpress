import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const PostDetails = props => {
  const { post, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (post) {
    return (
      <div className="container section project-details">
        <div className="card--container">
          <div className="post--container">
            <span>{post.title}</span>
            <p>{post.content}</p>
          </div>
          <div className="author--container">
            <div>
              Posted by {post.authorFirstName} {post.authorLastName}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p className="loading">Loading posts....</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);

  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(PostDetails);
