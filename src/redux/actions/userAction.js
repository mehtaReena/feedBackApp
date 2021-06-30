import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_IN_PROGRESS, LOGOUT_ERROR, LOGOUT_SUCCESS, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../actions/action-types"
// import app from "../store/firebaseConfig";
// import Firebase from '../config/Firebase'
import firebase from "../firebaseConfig";
const db = firebase.database();


export const loginSucess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
});

export const loginprogress = () => ({
    type: LOGIN_IN_PROGRESS,
});

export const loginError = () => ({
    type: LOGIN_ERROR,
    error: 'email or password is invalid'
});

export const logoutSucess = () => ({
    type: LOGOUT_SUCCESS
});

export const logoutError = (error) => ({
    type: LOGOUT_ERROR,
    error: error
});

export const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});

export const signupErr = (error) => ({
    type: SIGNUP_ERROR,
    error: error
});

export const signUp = (email, password, username) => {

    console.log(" SIgn up....")

    return async function (dispatch) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        dispatch(signupSuccess());
        const user = firebase.auth().currentUser;
        return user.updateProfile({
          displayName: username
        })
      })
    }
}

export const signIn = (email, password) => {
    console.log(" Inside in Sign")
    return async function (dispatch) {
        try {
            dispatch(loginprogress());
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log("userCredential  ", userCredential)
            dispatch(loginSucess(userCredential.user.displayName));
            // fetchTripDetails("test101")

        }
        catch (error) {
            dispatch(loginError());
            console.log(error.message);
        }
    }
}

export const signOut = () => {
    return async function (dispatch) {
        try {
            await firebase.auth().signOut();
            dispatch(logoutSucess());
        }
        catch (err) {
            dispatch(logoutError(err));
        }
    }
}



