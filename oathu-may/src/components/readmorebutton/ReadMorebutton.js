import React, { useState } from "react";

function ReadMorebutton(props) {
    const [readMores, SetReadMore] = useState(false);

    const ClikesLats = () => {
        SetReadMore((p) => !p);
    };
    let texts =
        "RCS (Rich Communication Services) is a next generation SMS protocol that upgrades text messaging. Rich features like payments, high-res photo & file sharing, location sharing, video calls, and much more, are delivered to a device's default messaging app.";
    return (
        <div>
            Read More Button
            {readMores ? texts : texts.slice(0, 100)}
            <button onClick={ClikesLats}>
                {readMores ? "Readmore Less..." : "Readmore..."}
            </button>
        </div>
    );
}

export default ReadMorebutton;
