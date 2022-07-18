import { css } from "@emotion/react";
import React, { useCallback, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import SubMenu from "./SubMenu";
import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery } from "react-responsive";

function Header() {
    const isDeskTop = useMediaQuery({ query: "(min-width: 1224px)" });
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuIconClickHandler = useCallback(() => {
        setIsOpenMenu(!isOpenMenu);
    }, [isOpenMenu]);

    if (isDeskTop) {
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

    return (
        <header css={headerStyle}>
            <nav css={navStyle}>
                <div css={mobileStyle}>
                    <Logo />
                    <MenuIcon onClick={menuIconClickHandler} />
                </div>
                {isOpenMenu &&
                    <React.Fragment>
                        <Menu />
                        <SubMenu />
                    </React.Fragment>
                }
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
    align-items: center;
    @media screen and (max-width: 1223px) {
        flex-direction: column;
    }
`;

const mobileStyle = css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > svg {
        cursor: pointer;
    }
`;

export default Header;