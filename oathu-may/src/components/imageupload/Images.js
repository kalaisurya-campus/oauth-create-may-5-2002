import React from "react";
import { useState } from "react";

function Images(props) {
    const [images, SetImages] = useState();

    const handleimagechange = (e) => {
        console.log(e.target.files[0].size);
        if (e.target.files[0].size < 100000) {
            SetImages(e.target.files[0]);
        } else {
            console.log("size in big");
        }
    };
    const handleimages = (e) => {
        e.preventDefault();
    };

    const RemoveImages = () => {
        SetImages("");
    };
    return (
        <div>
            <form onSubmit={handleimages}>
                <input
                    type="file"
                    accept="images/"
                    onChange={handleimagechange}
                />
                <button type="submit">Upload</button>
            </form>

            {images && (
                <div>
                    <img src={URL.createObjectURL(images)} />
                    <button onClick={RemoveImages}>Remove</button>
                </div>
            )}
        </div>
    );
}

export default Images;
