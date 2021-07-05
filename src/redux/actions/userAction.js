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
        try {
            if (isvalid(username)) {
                // eslint-disable-next-line
                let userCredential = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        dispatch(signupSuccess());
                        const user = firebase.auth().currentUser;
                        user.updateProfile({
                            displayName: username
                        })
                        firebase.database().ref('users/' + username).update({
                            username: username,
                            email: email,
                        });
                        firebase.database().ref('usersnames/').push({
                            username: username,
                        });
                    })
            }
            else {
                console.log(" invalid username!");
                return dispatch(signupErr("invalid username!"));

            }
        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    return dispatch(signupErr("E-mail already in use."));
                case "auth/invalid-email":
                    return dispatch(signupErr("E-mail already in use."));
                default:
                    return dispatch(signupErr("E-mail already in use."));

            }
        }
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

        }
        catch (error) {

            console.log("Sign -In error " ,error.message);
            return  dispatch(loginError(error.message));
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



function isvalid(name) {
    let valid = true
    db.ref('usersnames/').on("value", (snapshot) => {
        if (snapshot.val()) {
            let usernames = Object.values(snapshot.val())
            if (usernames) {

                usernames.map((item) => {
                    console.log(item.username, name)
                    if (item.username.toString().toLowerCase() === name.toString().toLowerCase())
                     {
                    console.log("valid  ..", item.username, name, valid)
                   return valid=false

                     }
                     return   valid

                })
            }
        }


    })
    console.log(valid)
    return valid
}