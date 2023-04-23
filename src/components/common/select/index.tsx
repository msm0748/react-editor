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
    StyledColorOptionContainer,
    StyledColorOptionWrap,
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
    const [colors, setColors] = useState<OptionType[]>([]);
    const handleSelectedColor = (option: OptionType) => {
        handleOptionClick(option);
        // 최근 사용한 글자색 7개 추출
        setColors((prev: OptionType[]) => {
            const newColors = [option, ...prev.filter((value) => value.title !== option.title)].slice(0, 7);
            return newColors;
        });
    };

    return (
        <StyledSelectContainer ref={selectRef}>
            <StyledMenuButton className={`menu-item${isOpen ? " is-active" : ""}`} onClick={toggleOpen}>
                <StyledColorIcon bgColor={colors.length > 0 ? colors[0].title : "#000"}>T</StyledColorIcon>
            </StyledMenuButton>
            {isOpen && (
                <StyledColorOptionContainer>
                    {colors.length > 0 && (
                        <StyledColorOptionWrap>
                            <span>최근 사용한 글자색</span>
                            <StyledColorOptionList>
                                {colors.map((option, index) => (
                                    <StyledColorOption key={index} bgColor={option.title} onClick={() => handleSelectedColor(option)}></StyledColorOption>
                                ))}
                            </StyledColorOptionList>
                        </StyledColorOptionWrap>
                    )}

                    <StyledColorOptionWrap style={{ borderTop: "1px solid hsla(0,0%,79%,.3)" }}>
                        <StyledColorOptionList>
                            {options.map((option, index) => (
                                <StyledColorOption key={index} bgColor={option.title} onClick={() => handleSelectedColor(option)}></StyledColorOption>
                            ))}
                        </StyledColorOptionList>
                    </StyledColorOptionWrap>
                </StyledColorOptionContainer>
            )}
        </StyledSelectContainer>
    );
}
