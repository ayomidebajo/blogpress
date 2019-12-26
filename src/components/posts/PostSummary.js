import React from 'react';

//outputting posts on the dashboard
const PostSummary = ({ post }) => {
    return (
          <div className="container">
          <div className="row s4 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{post.title}</span>
                        <p>{post.content}
                        </p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div>
                </div>
            </div>
          </div>
    )

}
export default PostSummary;