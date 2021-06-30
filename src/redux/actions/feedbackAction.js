import * as  actions from './action-types'
// import app from "../store/firebaseConfig";
// import {database} from "../store/firebaseConfig"
import app from "../firebaseConfig"
const db = app.database();


export const fetchFeedbackInprogress = () => ({
    type: actions.FETCH_FEEDBACK_INPROGRESS,
});

export const fetchFeedbackSuccess = (data) => ({
    type:actions.FETCH_FEEDBACK_SUCCESS,
    payload: data
});

export const fetchFeedbackerror = (error) => ({
    type:actions.FETCH_FEEDBACK_ERROR,
    error: error
});


export const deleteFeedbackInprogress = () => ({
    type: actions.DELETE_FEEDBACK_INPROGRESS,
});

export const deleteFeedbackSuccess = (data) => ({
    type:actions.DELETE_FEEDBACK_SUCCESS,
    payload: data
});

export const deleteFeedbackerror = (error) => ({
    type:actions.DELETE_FEEDBACK_ERROR,
    error: error
});




export const fetchFeedBack = (instance) => {
    console.log(" fetchFeedBack"  ,instance)
    return async function (dispatch) {
        try {
            dispatch(fetchFeedbackInprogress());

            db.ref(instance).on("value", (snapshot) => {
                if (snapshot) {
                    console.log("snapshot  :", Object.values(snapshot.val()))
                dispatch(fetchFeedbackSuccess( Object.values(snapshot.val())));

                }
            });
        } catch (err) {
            dispatch(fetchFeedbackerror(err))

        }

    }
}


export const addFeedback = (user,value) => {
    return async function(dispatch) {
        console.log("addfeedback  ",value)
        try {
            db.ref(user+"/").push({message:value});

        } catch (error) {
            console.error(error);
        }

    }
}


