import { LOGIN_ERROR, LOGIN_SUCCESS,LOGIN_IN_PROGRESS, LOGOUT_ERROR, LOGOUT_SUCCESS, SET_CURRENT_USER, SIGNUP_ERROR, SIGNUP_SUCCESS } from "../actions/action-types";

const initialState = {
    loading: false,
    currentUser: null,
    signinError: null,
    signoutError: null,
    signupError: null,
    validate: false,
    confirm: false,
    userName:null
}

export function userReducer(state=initialState, action) {
    switch(action.type) {
        case LOGIN_IN_PROGRESS:
            return { ...state, loading: true };
        case LOGIN_SUCCESS:
             console.log(" Login success..." ,action.payload )
            return {...state, signinError: null, validate: true, loading :false,currentUser: action.payload};
        case LOGIN_ERROR:
            console.log(" Login success..." ,action.payload )
            return {...state, signinError: action.error};
        case SET_CURRENT_USER:
            return {...state, currentUser: action.payload ,validate: true};
        case LOGOUT_SUCCESS:
            console.log("LOGOUT_SUCCESS")
            return { state:null,signoutError: null, validate: false ,currentUser:null ,confirm:false};
        case LOGOUT_ERROR:
            return {...state, signoutError: action.error};
        case SIGNUP_SUCCESS:
            return {...state, signupError: null, confirm: true};
        case SIGNUP_ERROR:
            return {...state, signupError: action.error, confirm: false};
        default:
            return state;
    }
}