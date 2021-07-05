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
    console.log(" fetchFeedBack"  , db.ref("users/"+instance+"/feedbacks/feedback"))
    return async function (dispatch) {
        try {
            dispatch(fetchFeedbackInprogress());

            db.ref("users/"+instance +"/feedbacks").on("value", (snapshot) => {
                console.log(snapshot)
                if (snapshot.val()) {
                    console.log("snapshot  :",(snapshot.val()))
                dispatch(fetchFeedbackSuccess( Object.entries(snapshot.val())));

                }
                else{
                    dispatch(fetchFeedbackSuccess([]));


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
            db.ref("users/"+user+"/feedbacks").push({"feedback":value});

        } catch (error) {
            console.error(error);
        }

    }
}


export const removefromDB = (user ,id) => {
    return async function(dispatch) {
        console.log("Remove FeedBack  ",id)
        try {
            db.ref("users/"+user+"/feedbacks/"+id).remove()



        } catch (error) {
            console.error(error);
        }

    }
}



