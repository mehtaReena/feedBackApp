import { FETCH_FEEDBACK_SUCCESS, FETCH_FEEDBACK_INPROGRESS, FETCH_FEEDBACK_ERROR,DELETE_FEEDBACK_ERROR,DELETE_FEEDBACK_INPROGRESS,DELETE_FEEDBACK_SUCCESS
 } from '../actions/action-types';

let initialState = {
    loading: false,
    error: null,
    feedbacks: [],
    deleting:false

};

export default function feedbackReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_FEEDBACK_INPROGRESS:
            return { ...state, loading: true, deleting: false };
        case FETCH_FEEDBACK_SUCCESS:
            console.log("success")
            return { ...state, feedbacks: action.payload,  deleting: false ,loading: false, error: null };
        case FETCH_FEEDBACK_ERROR:
            return { ...state, error: action.error };
        case DELETE_FEEDBACK_INPROGRESS:
            return { ...state, deleting: true };
        case DELETE_FEEDBACK_SUCCESS:
            console.log("success")
            return { ...state, deleting:false, loading: false, error: null };
        case DELETE_FEEDBACK_ERROR:
            return { ...state, error: action.error };

        default:
            return state;
    }
}
