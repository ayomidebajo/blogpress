import React from 'react';
import PostSummary from './PostSummary';

//lists of posts
const PostList = ({ posts }) => {
    return (
        <div className="container">
        <div className="projects-section">
            { posts&&posts.map(post => {
                return (
                    <PostSummary post={post} key={post.id}/>
                )
            })}
        </div>
        </div>
        
    )
}

export default PostList
