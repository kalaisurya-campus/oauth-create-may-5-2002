import {
    ERROR_USER_DATA_FAILED,
    GET_USER_DATA,
    USER_LOADING_FIRST_DATA,
} from "../types";
import axios from "axios";
const GET_ACTION_DATA_GETUSERS = () => async (dispatch, getstate) => {
    dispatch({ type: USER_LOADING_FIRST_DATA });
    try {
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        );
        dispatch({ type: GET_USER_DATA, payload: response.data });
    } catch (err) {
        dispatch({ type: ERROR_USER_DATA_FAILED, error: "Data Not Found 404" });
    }
};

export default GET_ACTION_DATA_GETUSERS;
