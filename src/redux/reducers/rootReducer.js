import { combineReducers } from "redux";
import {userReducer} from '../reducers/userReducer'
import feedbackReducer from '../reducers/feedbackReducers'


const rootReducer = combineReducers({
    userState: userReducer,
    feedbackState :feedbackReducer

});

export default rootReducer;