import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./Otp.scss";
function OtpCheck(props) {
    const [check, setCheck] = useState(" ");
    const handleChange = (check) => setCheck(check);

    console.log("cekcls", check);
    return (
        <div className="mains-otp">
            <OtpInput
                value={check}
                onChange={handleChange}
                numInputs={4}
                separator={<p className="ms-3"></p>}
                className="check"
                style={{
                    display: "flex",
                    gap: "30px",
                }}
                focusStyle={{
                    border: "2px solid red",
                }}
                inputStyle={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "5px",
                }}
                shouldAutoFocus={{
                    border: "2px solid red",
                }}
                errorStyle={{
                    color: "red",
                }}
            />
        </div>
    );
}

export default OtpCheck;
