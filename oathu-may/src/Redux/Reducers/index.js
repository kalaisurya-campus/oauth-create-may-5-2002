import { combineReducers } from "redux";
import USER_SPAN_DATA from "./UserSpan";

const RootReducers = combineReducers({
    datauser: USER_SPAN_DATA,
});

export default RootReducers;
