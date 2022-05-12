import React from "react";
import "./Focus.scss";
function Foucs(props) {
    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        document.querySelector("#scrolls").innerHTML =
            "ScrollValue" + " " + " " + scroll + " " + " " + "Px";
        if (scroll > 10) {
            document.querySelector(".scroll-main").style.background = "white";
        }
        if (scroll > 50) {
            document.querySelector(".scroll-main").style.background = "red";
        }
        if (scroll > 150) {
            document.querySelector(".scroll-main").style.background = "orange";
        }
        if (scroll > 450) {
            document.querySelector(".scroll-main").style.background = "blue";
        }
        if (scroll > 750) {
            document.querySelector(".scroll-main").style.background = "green";
        }
        if (scroll > 950) {
            document.querySelector(".scroll-main").style.background =
                "lightgreen";
        }
    });

    function changes(event) {
        console.log(event);
        let date = new Date();
        let shows =
            date.getDate() +
            "/" +
            date.getMonth() +
            1 +
            "/" +
            date.getFullYear();
        console.log("dates", shows);

        const days = ["sunday", "mon", "thr", "wed", "tue", "fri", "star"];
        let dayscheck = date.getDay();

        let showdays = days[dayscheck];
        console.log("days", showdays);
        // document.querySelector(".images1").src=event.children[0].src;

        let hourse = date.getHours();
        let mintues = date.getMinutes();
        let seconds = date.getSeconds();

        let periods = "AM";

        if (hourse === 0) {
            hourse = 12;
        }
        if (hourse > 12) {
            hourse = hourse - 12;
            periods = "PM";
        }
        if (hourse < 10) {
            hourse = "0" + hourse;
        }
        if (mintues < 10) {
            mintues = "0" + mintues;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        let showallseconds =
            hourse + ":" + " " + mintues + ":" + " " + seconds + " " + periods;
        console.log("seconds show", showallseconds);
    }
    changes();

    const move = (event) => {
        console.log(event.children[0].src);
    };
    return (
        <div className="focus-texts">
            <h1 id="scrolls"></h1>
            <div className="scroll-main mt-5">
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>

                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
                <h1>
                    Lorem ipsum, in graphical and textual context, refers to
                    filler text that is placed in a document or visual
                    presentation. Lorem ipsum is derived from the Latin "dolorem
                    ipsum" roughly translated as "pain itself."
                </h1>
            </div>
            <div>
                <div className="images-first">
                    <img
                        src="https://picsum.photos/id/237/200/300"
                        className="images1"
                    />
                </div>

                <div className="next-images">
                    <div onClick={(e) => changes(this)}>
                        <img src="https://media.istockphoto.com/photos/puratchi-thalaivar-dr-mgr-central-railway-stationchennai-central-picture-id1226340114?k=20&m=1226340114&s=612x612&w=0&h=Fb2w07580AHJoElti5zras-TbBkv4ePkMcCXqoGfYLc=" />
                    </div>
                    <div onClick={(e) => changes(this)}>
                        <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" />
                    </div>
                    <div onClick={(e) => changes(this)}>
                        <img src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                    <div onClick={(e) => changes(this)}>
                        <img src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2019/12/Love-Images-1.jpg" />
                    </div>
                    {/* <img
                        src="https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU="
                        onClick={() => changes()}
                    />
                    <img
                        src="https://media.istockphoto.com/photos/slave-hands-broken-chains-with-bird-flying-picture-id1296601764?b=1&k=20&m=1296601764&s=170667a&w=0&h=0hjKKZZYp2Wl1BRxopegdWrJwTwi1Vlbs_aXdmhhr_o="
                        onClick={() => changes()}
                    /> */}
                </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-3">
                        <input
                            type="text"
                            maxLength="1"
                            id="text1"
                            onKeyUp={move}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Foucs;
