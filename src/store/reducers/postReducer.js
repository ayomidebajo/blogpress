const iniState = {
    posts: [
        {id: '1', title: 'i need money', content: 'i need to start working'},
        {id: '2', title: 'i need money', content: 'i need to start working'},
        {id: '3', title: 'i need money', content: 'i need to start working'}
    ]
}

const postReducer = (state = iniState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            console.log('created post', action.post);     
    }
    return state
}

export default postReducer;