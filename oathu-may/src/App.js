import React, { useState, useEffect } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Images from "./components/imageupload/Images";
import ReduxData from "./components/ReduxDataget.js/ReduxData";
import ContextAPIData from "./components/Contextapigetdata/ContextAPIData";
import Login from "./components/login/Login";
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
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
