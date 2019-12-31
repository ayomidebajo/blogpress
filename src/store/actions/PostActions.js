export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore();
        firestore.collection('posts').add({
           ...post,
            authorFirstName: 'Ayomide',
            authorLastName: 'Bajo',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'ADD_POST',post: post});
        }).catch((err)=> {
            dispatch({ type: 'ADD_POST_ERROR', err });
        })
    }
}