import styled from "@emotion/styled";

export const StyledContainer = styled.div`
    position: relative;
`;

export const StyledOptionContainer = styled.div<{ width: number }>`
    position: absolute;
    top: 100%;
    left: 0;
    width: ${({ width }) => width}px;
    border: 1px solid #ccc;
    z-index: 10;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    box-sizing: border-box;
`;

export const StyledConfirmButton = styled.button<{ disabled?: boolean }>`
    width: 122px;
    height: 30px;
    color: ${({ disabled }) => (disabled ? "#ddd" : "#333")};
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
`;
