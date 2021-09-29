import { firebase } from "react-redux-firebase";

export const createPost = (post) => {
  // console.log(post, "we are posting from actions");
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    // const postArray = post.map((obj) => {
    //   return Object.assign({}, obj);
    // });
    console.log(post, "uhm ehat");
    let stringifiedData = JSON.stringify(post);
    // let parsed = JSON.parse(post);
    console.log(stringifiedData, "string");
    try {
      const firestore = getFirestore();
      const profile = getState().firebase.auth;

      await firestore.collection("posts").add({
        content: stringifiedData,
        authorFirstName: profile.firstname,
        authorLastName: profile.lastname,
        authorId: profile.uid,
        // displayName: profile.displayName ? profile.displayName : null,
        createdAt: new Date(),
      });
      dispatch({
        type: "ADD_POST",
        payload: post,
      });
    } catch (error) {
      dispatch({ type: "ADD_POST_ERROR", payload: error });
    }
    // .then(() => {
    //   dispatch({ type: "ADD_POST", post });
    //   console.log(post, "checking post");
    // })
    // .catch((err) => {
    //
    // });
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
