export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log(firebase, "checking logins");

    console.log(credentials, "checking credentials");

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
    // window.location.reload();
  };
};

export const signUp = (newUser) => {
  console.log(newUser, "checking new user");
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore.collection("users").doc(resp.user.uid).set({
          firstname: newUser.first_name,
          lastname: newUser.last_name,
        });
      }, console.log(newUser.first_name[0] + newUser.last_name[0], "Checking something!"))
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const upDate = () => {
  return (dispatch, { getFirebase }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: "",
        photoURL: "",
      })
      .then(() => {
        dispatch({ type: "Update Successful" });
      })
      .catch(() => {
        dispatch({ type: "Oops! An error occured" });
      });
  };
};
