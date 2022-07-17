import { css } from "@emotion/react";
import React from "react";

function SubMenu() {
    return (
        <ul css={ulStyle}>
            <li>sub1</li>
            <li>sub2</li>
        </ul>
    );
}

const ulStyle = css`
    display: flex;
    flex-direction: row;
    & > li {
        padding: 0.5rem;
        cursor: pointer;
    }
`;
export default SubMenu;