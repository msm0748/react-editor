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

export const StyledColorOptionContainer = styled.div<{ width: number }>`
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

export const StyledColorOptionWrap = styled.div`
    & > div {
        padding: 5px 6px;
    }
    & > span {
        display: inline-block;
        padding-top: 5px;
        padding-left: 6px;
        opacity: 0.5;
        font-size: 13px;
        color: #333;
    }
`;

export const StyledColorOptionList = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const StyledColorOption = styled.div<{ bgColor: string; isSelected?: boolean }>`
    width: 16px;
    height: 16px;
    margin: 1px;
    border: 1px solid #ddd;
    background: ${({ bgColor }) => (bgColor === "default" ? "linear-gradient(-45deg, #fff 48%, #ff001e 0, #ff001e 52%, #fff 0) no-repeat" : bgColor)};
    background-size: 100% 100%;
    position: relative;
    cursor: pointer;
    border-top: 1px solid hsla(0, 0%, 79%, 0.3);

    &:before {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: -2px;
        left: -2px;
        border: ${({ isSelected }) => (isSelected ? "2px solid #444" : "")};
        content: ${({ isSelected }) => (isSelected ? "''" : "none")};
    }
    &:hover:before {
        border: 2px solid #444;
        content: "";
    }
`;

export const StyledDefaultColorOption = styled(StyledColorOption)`
    background: linear-gradient(-45deg, #fff 48%, #ff001e 0, #ff001e 52%, #fff 0) no-repeat;
`;

export const StyledColorIcon = styled.span<{ bgColor: string | undefined }>`
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
        background-color: ${({ bgColor }) => (bgColor ? bgColor : "#000")};
        content: "";
    }
`;

export const StyledBgColorIcon = styled.span<{ bgColor: string | undefined; textColor: string }>`
    position: relative;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    color: ${({ textColor }) => textColor};
    background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
`;

export const StyledChromePicker = styled.div`
    border-top: 1px solid hsla(0, 0%, 79%, 0.3);
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 5px;

    .chrome-picker {
        width: 100% !important;
        box-shadow: none !important;
        border-radius: 0 !important;

        & > div {
            border-radius: 0 !important;
        }
    }
`;

export const StyledMoreButton = styled.div<{ isOpen: boolean }>`
    text-align: center;
    cursor: pointer;
    border-top: 1px solid hsla(0, 0%, 79%, 0.6);

    &:hover span {
        opacity: 1;
    }
    span {
        display: inline-block;
        vertical-align: middle;
        font-size: 12px;
        color: #333;
        opacity: 0.6;

        &:after {
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            margin-top: 3px;
            margin-left: 6px;
            border: solid #979797;
            border-width: 0 1px 1px 0;
            transform: ${({ isOpen }) => (isOpen ? "translateY(0) rotate(225deg)" : "translateY(-50%) rotate(45deg)")};

            vertical-align: middle;
        }
    }
`;

export const StyledConfirmButton = styled.button<{ disabled?: boolean }>`
    width: 122px;
    height: 30px;
    color: ${({ disabled }) => (disabled ? "#ddd" : "#333")};
    background-color: #fff;
    border: 1px solid #ddd;
    cursor: pointer;
`;

export const StyledInput = styled.input`
    padding: 0 0 4px;
    font-size: 13px;
    height: 27px;
    border: none;
    border-bottom: 1px solid #e3e3e3;
    letter-spacing: -0.6px;
    color: #333333;
    display: block;
    outline: none;
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    line-height: 15px;
`;
