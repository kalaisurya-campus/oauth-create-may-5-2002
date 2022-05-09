import {
    USER_NAME_GET_LOCALSTORAGE_ERROR,
    USER_NAME_GET_LOCALSTORAGE_GET,
    USER_NAME_GET_LOCALSTORAGE_LOADING,
} from "../types";

const UserName_get = () => async (dispatch, getstate) => {
    dispatch({ type: USER_NAME_GET_LOCALSTORAGE_GET });
    try {
        const responseusernames = await localStorage.getItem("usernamekalai");
        // console.log(JSON.parse(responseusernames));
        // if (responseusernames) {
        //     return JSON.parse(responseusernames);
        // }
        dispatch({
            type: USER_NAME_GET_LOCALSTORAGE_LOADING,
            payload: JSON.parse(responseusernames),
        });
    } catch (err) {
        dispatch({
            type: USER_NAME_GET_LOCALSTORAGE_ERROR,
            error: "NO Data Found",
        });
    }
};

export default UserName_get;
