import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Login(props) {
    const [names, SetNames] = useState({
        name: "",
        email: "",
        password: "",
    });

    const history = useHistory();

    const { name, email, password } = names;

    const handleonchage = (e) => {
        SetNames({ ...names, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        if (localStorage.getItem("authset")) {
            history.push("/");
        }
    }, []);
    const Handlesubmits = (e) => {
        e.preventDefault();
        if (email !== "kalai@gmail.com" && password !== "123") {
            toast("Email and Passord is Miss Matched");
        }
        history.push("/");
        localStorage.setItem("usernamekalai", JSON.stringify([names]));
        localStorage.setItem("authset", true);
    };
    return (
        <div>
            <ToastContainer />
            <form onSubmit={Handlesubmits}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter User Username"
                        onChange={handleonchage}
                        value={name}
                        name="name"
                    />
                </div>
                <br />

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter User Email"
                        onChange={handleonchage}
                        name="email"
                        value={email}
                    />
                </div>
                <br />
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter User Password"
                        onChange={handleonchage}
                        name="password"
                        value={password}
                    />
                </div>
                <br />
                <button>submit</button>
            </form>
        </div>
    );
}

export default Login;
