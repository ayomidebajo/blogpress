import React, { Component } from "react";
import PostList from "../posts/PostList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

//dashboard
class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { posts, auth } = this.props;

    if (!auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <div className="dashboard-container">
          <div className="row">
            <div className="col s12 m6">
              <PostList posts={posts} />
              <div className="btn-create">
                <Link to="/create">
                  <i
                    className="large material-icons"
                    onClick={this.handleClick}
                  >
                    mode_edit
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//connecting to the redux store and calling in objects
const mapStateToProps = state => {
  console.log(state);
  return {
    posts: state.post.post,
    // posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Dashboard);
