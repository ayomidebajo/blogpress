import React from 'react';
import PostSummary from './PostSummary';
import { Link } from 'react-router-dom';

//lists of posts
const PostList = ({ posts }) => {
    return (
        <div className="container">
        <div className="projects-section">
            { posts&&posts.map(post => {
                return (
                    <Link to={'/post/' + post.id} >
                    <PostSummary post={post} key={post.id}/>
                    </Link>
                )
            })}
        </div>
        </div>
        
    )
}

export default PostList
