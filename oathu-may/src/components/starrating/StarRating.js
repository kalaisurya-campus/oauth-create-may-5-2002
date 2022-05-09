import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
function StarRating(props) {
    const [currentclick, SetCureentclicks] = useState(0);

    const handleclicks = (value) => {
        SetCureentclicks(value);
        console.log(value);
    };
    const colors = {
        grey: "lightgrey",
        orange: "orange",
    };

    const stars = Array(5).fill(0);
    return (
        <div>
            <h1>StarRating</h1>
            <div className="row d-flex">
                {stars.map((_, index) => {
                    return (
                        <div>
                            <FaStar
                                onClick={() => handleclicks(index + 1)}
                                color={
                                    currentclick > index
                                        ? colors.orange
                                        : colors.grey
                                }
                                key={index}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StarRating;
