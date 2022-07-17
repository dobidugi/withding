import { css } from "@emotion/react";
import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import SubMenu from "./SubMenu";

function Header() {
    return (
        <header css={headerStyle}>
            <nav css={navStyle}>
                <Logo />
                <Menu />
                <SubMenu />
            </nav>
        </header>
    );
}

const headerStyle = css`
    color: white;
    background-color: #333;
    padding: 2rem;
`;

const navStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default Header;