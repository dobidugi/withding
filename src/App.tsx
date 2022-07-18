import { Global } from "@emotion/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import DefaultStyle from "./DefaultStyle";

function App() {
    return (
        <div>
            <Router>
                <Global styles={DefaultStyle} />
                <Header />
            </Router>

        </div>
    );
}

export default App;