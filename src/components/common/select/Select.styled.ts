import styled from "@emotion/styled";

export const StyledSelectContainer = styled.div`
    position: relative;
`;

export const StyledSelectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
`;

export const StyledSelectedOption = styled.div`
    font-size: 16px;
`;

export const StyledArrowIcon = styled.div<{ isOpen: boolean }>`
    margin-left: 10px;
    font-size: 12px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "rotate(0)")};
    transition: transform 0.2s ease-in-out;
`;

export const StyledOptionList = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 160px;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    z-index: 10;
`;

export const StyledOption = styled.div<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 12px;
    font-size: 14px;
    color: ${({ isSelected }) => (isSelected ? "#fff" : "#333")};
    background-color: ${({ isSelected }) => (isSelected ? "#333" : "transparent")};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ isSelected }) => (isSelected ? "" : "#f2f2f2")};
    }
`;

export const StyledColorOptionList = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 170px;
    border: 1px solid #ccc;
    border-radius: 0 0 4px 4px;
    background-color: #fff;
    z-index: 10;
`;

export const StyledColorOption = styled.div<{ bgColor: string }>`
    width: 16px;
    height: 16px;
    margin: 2px;
    border: 1px solid #ddd;
    background-color: ${({ bgColor }) => bgColor};
    cursor: pointer;
`;

export const StyledColorIcon = styled.span<{ bgColor: string }>`
    position: relative;
    width: 20px;
    height: 20px;
    left: -3px;
    font-size: 17px;
    &:after {
        display: block;
        position: absolute;
        bottom: 3px;
        right: -2px;
        width: 7px;
        height: 7px;
        border-radius: 100%;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
        background-color: ${({ bgColor }) => bgColor};
        content: "";
    }
`;
