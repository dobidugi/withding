import { Global } from "@emotion/react";
import React from "react";
import Header from "./components/Header/Header";
import DefaultStyle from "./DefaultStyle";

function App() {
    return (
        <div>
            <Global styles={DefaultStyle} />
            <Header />
        </div>
    );
}

export default App;