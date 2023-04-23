import { ReactNode, useState } from "react";
import {
    StyledArrowIcon,
    StyledColorOption,
    StyledOption,
    StyledOptionList,
    StyledSelectBox,
    StyledSelectContainer,
    StyledSelectedOption,
    StyledColorOptionList,
    StyledColorIcon,
} from "./Select.styled";
import { useModal } from "./useModal";
import { StyledMenuButton } from "../button/Button.styld";

interface OptionType {
    title: string;
    action: () => void;
    isActive: (value?: string) => boolean;
    icon?: string | ReactNode;
}

interface Props {
    options: OptionType[];
}

export function DropDown({ options }: Props) {
    const { isOpen, selectRef, toggleOpen, handleOptionClick } = useModal();

    return (
        <StyledSelectContainer ref={selectRef}>
            <StyledSelectBox onClick={toggleOpen}>
                <StyledSelectedOption>{options.find((option) => option.isActive() === true)?.title}</StyledSelectedOption>
                <StyledArrowIcon isOpen={isOpen}>▼</StyledArrowIcon>
            </StyledSelectBox>
            {isOpen && (
                <StyledOptionList>
                    {options.map((option, index) => (
                        <StyledOption key={index} isSelected={option.isActive()} onClick={() => handleOptionClick(option)}>
                            {option.title}
                        </StyledOption>
                    ))}
                </StyledOptionList>
            )}
        </StyledSelectContainer>
    );
}

export function ColorSelect({ options }: Props) {
    const { isOpen, selectRef, toggleOpen, handleOptionClick } = useModal();
    const [color, setColor] = useState("#000000");
    const handleSelectedColor = (option: OptionType, title: string) => {
        handleOptionClick(option);
        setColor(title);
    };
    return (
        <StyledSelectContainer ref={selectRef}>
            <StyledMenuButton className={`menu-item${isOpen ? " is-active" : ""}`} onClick={toggleOpen}>
                <StyledColorIcon bgColor={color}>T</StyledColorIcon>
            </StyledMenuButton>
            {isOpen && (
                <StyledColorOptionList>
                    {options.map((option, index) => (
                        <StyledColorOption key={index} bgColor={option.title} onClick={() => handleSelectedColor(option, option.title)}></StyledColorOption>
                    ))}
                </StyledColorOptionList>
            )}
        </StyledSelectContainer>
    );
}
