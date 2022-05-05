import { applyMiddleware, createStore } from "redux";
import RootReducers from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const store = createStore(
    RootReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
