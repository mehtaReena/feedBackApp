import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../redux/reducers/rootReducer";
// import counterReducer from "./reducers/counterReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;