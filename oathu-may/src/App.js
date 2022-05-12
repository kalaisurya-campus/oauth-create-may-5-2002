import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Images from "./components/imageupload/Images";
import ReduxData from "./components/ReduxDataget.js/ReduxData";
import ContextAPIData from "./components/Contextapigetdata/ContextAPIData";
import Login from "./components/login/Login";
import ReadMorebutton from "./components/readmorebutton/ReadMorebutton";
import StarRating from "./components/starrating/StarRating";
import ReadMoreCards from "./components/readmorecards/ReadMoreCards";
import PachiCommonDeploy from "./components/switchpachiyappandata/PachiCommonDeploy";
import Commondatas from "./components/switchstatementsin/Commondatas";
import Conformpassword from "./components/conformpasswordcheck/Conformpassword";
import Foucs from "./focus/Foucs";
import OtpCheck from "./otpcheck/OtpCheck";
function App() {
    const getcolorset = () => {
        return JSON.parse(localStorage.getItem("themes-dark"));
    };
    const [darkcolor, SetDarkColor] = useState(getcolorset());
    useEffect(() => {
        localStorage.setItem("themes-dark", JSON.stringify(darkcolor));
    }, [darkcolor]);

    return (
        <div className={darkcolor ? "theme--dark" : "theme--light"}>
            <button onClick={() => SetDarkColor(!darkcolor)}>theme</button>
            <div className="inside-app">
                <Router>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/images" component={Images} />
                        <Route path="/reduxdata" component={ReduxData} />
                        <Route path="/contextapi" component={ContextAPIData} />
                        <Route path="/login" component={Login} />
                        <Route path="/readmore" component={ReadMorebutton} />
                        <Route path="/star" component={StarRating} />
                        <Route path="/readbutton" component={ReadMoreCards} />
                        <Route
                            path="/commonurl"
                            component={PachiCommonDeploy}
                        />
                        <Route path="/anotherurl" component={Commondatas} />
                        <Route path="/forms" component={Conformpassword} />
                        <Route path="/focus" component={Foucs} />
                        <Route path="/otp" component={OtpCheck} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
