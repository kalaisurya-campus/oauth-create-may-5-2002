import React, { useState } from "react";

function Conformpassword(props) {
    const [passwords, SetPasswords] = useState("");
    const [passwordsconform, SetConformPasswords] = useState("");
    const [passwordserror, SetConformerror] = useState("");
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Password
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Conform Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Conformpassword;
