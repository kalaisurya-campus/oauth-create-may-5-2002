import { combineReducers } from "redux";
import User_REducer_name from "./UserNames";
import USER_SPAN_DATA from "./UserSpan";

const RootReducers = combineReducers({
    datauser: USER_SPAN_DATA,
    username: User_REducer_name,
});

export default RootReducers;
