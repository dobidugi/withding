import { css } from "@emotion/react";
import NavigatorButton from "components/common/NavigatorButton";
import React from "react";
import text from "../../strings/header";
function SubMenu() {
    const { signin, signup } = text.subMenu;
    return (
        <ul css={ulStyle}>
            <li>
                <NavigatorButton
                    text={signin}
                />
            </li>

            <li>
                <NavigatorButton
                    text={signup}
                />
            </li>
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