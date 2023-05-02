import styled from "@emotion/styled";

export const StyledMenuButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
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

export const StyledOptionItem = styled.div<{ isSelected: boolean }>`
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
