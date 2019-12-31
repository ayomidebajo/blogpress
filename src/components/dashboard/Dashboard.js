import React, { Component } from 'react'
import PostList from '../posts/PostList'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//dashboard
class Dashboard extends Component {
    render() {
      // console.log(this.props);
      const { posts } = this.props
        return (
<div className="container">
  <div className="dashboard-container">
    <div className="row">
      <div className="col s12 m6">
        <PostList posts={posts}/>
          <div className="fixed-action-btn bottom">
            <Link to='/create'>
              <a className="btn-floating btn-large grey darken-2">
              <i className="large material-icons" onClick={this.handleClick}>
                mode_edit
              </i>
              </a>
            </Link>
          </div>
      </div>
    </div>  
  </div>
</div>
        )
    }
}

//connecting to the redux store and calling in objects
const mapStateToProps = (state) => {
  return {
    posts: state.post.posts
  }
}
export default connect(mapStateToProps)(Dashboard)
