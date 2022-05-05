import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Homepage(props) {
    const history = useHistory();

    const [logouts, SetLogouts] = useState(false);
    useEffect(() => {
        if (!localStorage.getItem("authset")) {
            history.push("/login");
        }
    }, [logouts]);

    const LogoutUser = () => {
        localStorage.removeItem("authset");
        SetLogouts(true);
    };
    return (
        <div>
            Homepage
            <button onClick={LogoutUser}>Logout</button>
        </div>
    );
}

export default Homepage;
