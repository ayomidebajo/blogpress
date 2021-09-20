import { firebase } from "react-redux-firebase";

export const createPost = async (post) => {
  // console.log(post, "we are posting from actions");
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.auth;
    // console.log(firestore.collection("posts"), "wettin sup?");
    // console.log(getState(), "wettin sup again?");
    // console.log(firestore.collection("posts"), "firestore");
    // console.log(getState().firebase.auth, "checking profiles");

    const firstName = firestore.collection("users").firstname;
    console.log(profile.uid, "super user");
    // const lastName = irestore.collection('users').lasttname;

    // this sets the profile
    // TODO: Find the handler that creates the posts for firestore
    firestore
      .collection("posts")
      .add({
        ...post,
        // authorFirstName: profile.firstname,
        // authorLastName: profile.lastname,
        authorId: profile.uid,
        // displayName: profile.displayName ? profile.displayName : null,
        // createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "ADD_POST", post });
        console.log(post, "checking post");
      })
      .catch((err) => {
        dispatch({ type: "ADD_POST_ERROR", err });
      });
  };
};

export const getPosts = async (posts) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.auth;
    firestore
      .collection("posts")
      .then(() => {
        dispatch({ type: "GET_POSTS", posts });
        console.log(posts, "checking post");
      })
      .catch((err) => {
        dispatch({ type: "ADD_POST_ERROR", err });
      });
  };
};
