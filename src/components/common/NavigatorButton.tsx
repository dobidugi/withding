import { css } from "@emotion/react";
import React from "react";

interface NavigatorButtonProps {
    text: string;
}
function NavigatorButton(props: NavigatorButtonProps) {
    const { text } = props;
    return (
        <a css={style}>{text}</a>
    );
}

const style = css`
    font-weight: 500;
`;

export default React.memo(NavigatorButton);