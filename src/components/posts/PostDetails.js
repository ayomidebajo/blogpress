import React from 'react';

const PostDetails = (props) => {
    const id = props.match.params.id;
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
            <div className="card-content">
                <card-title>project Title - {id}</card-title>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum optio repellat quidem quis delectus quos consequuntur rem, et accusamus unde, quae nemo voluptatibus saepe voluptates voluptas enim reprehenderit, quod expedita!</p>
            </div>
            <div className="card-action gret lighten-4 grey-text">
                <div>Posted by ayomide Bajo</div>
                <div>26th of Dec, 2019</div>
            </div>
            </div>
        </div>
    )
}
export default PostDetails;