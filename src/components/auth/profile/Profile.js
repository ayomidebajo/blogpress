import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'react';

// const { posts, auth } = this.props;

handleImageChange = (e) => {
    const image = e.target.files[0]
}

class Profile extends Component {
    // if (!auth.uid) return <Redirect to="/" />
    render() {
        const { classes, user: { credentials: { photoUrl}}}
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

Profile.PropTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Profile)


