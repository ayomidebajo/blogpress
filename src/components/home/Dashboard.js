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
    console.log(this.props, "uhm dashboard");
    const { posts, auth } = this.props;

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <div className="dashboard-container">
          <h3>Featured</h3>
          <div className="featured--container">
            <div className="fashion-container">
              <Link to="/fashion">
                <button className="btn-featured">Fashion</button>
              </Link>
            </div>
            <div className="health-container">
              <Link to="/health">
                <button className="btn-featured">Health</button>
              </Link>
            </div>
          </div>
          <div className="hr"></div>
          <h3>Latest from Tech</h3>
          {/* <div className="latest--container">
            <div className="cards--container">
              <div className="image-and-stroke">
                <div className="image-de"></div>
              </div>
              <div className="card-content">
                <h5> How I landed a fullstack job without a degree</h5>
                <Link to="/tech">
                  <button className="btn">Read more...</button>
                </Link>
              </div>
            </div>

            <div className="cards--container">
              <div className="image-and-stroke">
                <div className="image-dr"></div>
              </div>
              <div className="card-content">
                <h5>How drones can help manage the world's food supply</h5>
                <Link to="/tech">
                  <button className="btn">Read more...</button>
                </Link>
              </div>
            </div>

            <div className="cards--container">
              <div className="image-and-stroke">
                <div className="image-sw"></div>
              </div>
              <div className="card-content">
                <h5>Smart watches-wrists that talk</h5>
                <Link to="/tech">
                  <button className="btn">Read more...</button>
                </Link>
              </div>
            </div>
          </div> */}

          <PostList posts={posts} />
        </div>
        <div className="btn-create">
          <Link to="/create">
            <i class="fas fa-pen"></i>
          </Link>
        </div>
      </div>
    );
  }
}

//connecting to the redux store and calling in objects
const mapStateToProps = (state) => {
  console.log(state.firestore, "wtf");
  return {
    // posts: state.post.post,
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts" }])
)(Dashboard);
