import { css } from "@emotion/react";
import React from "react";
import App from "../../App";

function Menu() {
    return (
        <ul css={ulStyle}>
            <li>Test1</li>
            <li>Test2</li>
            <li>Test3</li>
        </ul>

    );
}

const ulStyle = css`
    display: flex;
    flex-direction: row;
    & > li {
        padding: 1rem;
        cursor: pointer;
    }
    @media screen and (max-width: 1223px) {
        flex-direction: column;
    }
`;

export default Menu;