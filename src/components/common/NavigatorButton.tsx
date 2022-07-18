import { css } from "@emotion/react";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

interface NavigatorButtonProps {
    text: string;
    target: string;
}
function NavigatorButton(props: NavigatorButtonProps) {
    const { text, target } = props;
    const navigator = useNavigate();
    const onClick = useCallback(() => {
        navigator(target);
    }, [navigator, target]);

    return (
        <a css={style} onClick={onClick}>{text}</a>
    );
}

const style = css`
    font-weight: 500;
`;

export default React.memo(NavigatorButton);