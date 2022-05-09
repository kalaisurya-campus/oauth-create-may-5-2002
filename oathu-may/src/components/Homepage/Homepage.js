import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import UserName_get from "../../Redux/actions/UserName";

function Homepage(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [logouts, SetLogouts] = useState(false);
    console.log("received names", state);

    useEffect(() => {
        if (!localStorage.getItem("authset")) {
            history.push("/login");
        }
        dispatch(UserName_get());
    }, [logouts]);

    const LogoutUser = () => {
        localStorage.removeItem("authset");
        SetLogouts(true);
    };
    return (
        <div>
            <h1>{state.username.username.password}</h1>
            Homepage
            <button onClick={LogoutUser}>Logout</button>
            <Link to="/images">PUsh</Link>
            {/* <button onClick={history.push("/images")}>push</button> */}
        </div>
    );
}

export default Homepage;
