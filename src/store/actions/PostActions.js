import { firebase } from "react-redux-firebase";

export const createPost = (post) => {
  console.log(post.blocks, "we are posting from actions");
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(firestore.collection("posts"), "wettin sup?");
    console.log(getState(), "wettin sup again?");
    console.log(firestore, "firestore");
    console.log(getState().firebase, "firebase");

    firestore
      .collection("posts")
      .add({
        post,
        // authorFirstName: profile.firstName,
        // authorLastName: profile.lastName,
        authorId: firebase.auth.uid,
        // displayName: profile.displayName ? profile.displayName : null,
        // createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_POST", post });
      })
      .catch((err) => {
        dispatch({ type: "ADD_POST_ERROR", err });
      });
  };
};
