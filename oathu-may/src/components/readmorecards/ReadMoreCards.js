import React, { useEffect, useState } from "react";
import { GET_USER_KALAI } from "./api/get";

function ReadMoreCards(props) {
    const [first, setFirst] = useState([]);
    const [second, setSecond] = useState(2);
    useEffect(() => {
        apidatas();
    }, []);

    const apidatas = () => {
        GET_USER_KALAI()
            .then((res) => {
                console.log(res.data);
                setFirst(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addclick = () => {
        setSecond(second + 3);
    };

    const handleclickread = () => {
        if (second > 2) {
            return (
                <button onClick={() => handleclickread()}>Read More...</button>
            );
        }
    };
    return (
        <div>
            {first.length === 0 && <div>No DATA FOUND</div>}
            {first.slice(0, second).map((items, index) => {
                return (
                    <div key={index}>
                        <h1>{items.name}</h1>
                    </div>
                );
            })}
            <button onClick={() => addclick()}>Click</button>
            {handleclickread()}
        </div>
    );
}

export default ReadMoreCards;
