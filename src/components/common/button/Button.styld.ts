import styled from "@emotion/styled";

export const StyledMenuButton = styled.button`
    width: 28px;
    height: 28px;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    border: none;
    background-color: #fff;
    font-size: 16px;
    border-radius: 5px;
    margin: 0 1px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.07);
    }

    &.is-active {
        background-color: #333;
        color: #fff;
    }

    /* 구분선 */
    &.line i {
        width: 20px;
        height: 1px;
        background-color: #000;
    }
`;
