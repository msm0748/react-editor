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
    StyledBgColorIcon,
} from "./Select.styled";
import { useModal } from "./useModal";
import { StyledMenuButton } from "../button/Button.styld";

interface OptionType {
    icon?: string | ReactNode;
    title: string;
    action: () => void;
    isActive: (value?: string) => boolean;
}

interface Props {
    options: OptionType[];
}

export function DropDown({ options }: Props) {
    const [isOpen, selectRef, toggleOpen, handleOptionClick] = useModal();

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

interface ColorProps extends Props {
    mode: "color" | "bgColor";
}

export function ColorSelect({ options, mode }: ColorProps) {
    const [isOpen, selectRef, toggleOpen, handleOptionClick] = useModal();
    const [colors, setColors] = useState<OptionType[]>([]);
    const handleSelectedColor = (option: OptionType) => {
        handleOptionClick(option);

        // 최근 사용한 글자색 7개 추출
        setColors((prev: OptionType[]) => {
            const newColors = [option, ...prev.filter((value) => value.title !== option.title)].slice(0, 7);
            return newColors;
        });
    };

    const calculateTextColor = (backgroundColor: string | undefined) => {
        // 배경색의 밝기 계산
        if (backgroundColor) {
            const brightness =
                (parseInt(backgroundColor.slice(1), 16) >> 16) +
                ((parseInt(backgroundColor.slice(1), 16) >> 8) & 255) +
                (parseInt(backgroundColor.slice(1), 16) & 255) / 3;

            // 밝기가 240 이상인 경우 어두운 색상, 그렇지 않으면 밝은 색상으로 처리
            return brightness >= 240 ? "#000" : "#fff";
        }
        return "#000";
    };

    return (
        <StyledSelectContainer ref={selectRef}>
            <StyledMenuButton className={"menu-ite"} onClick={toggleOpen}>
                {mode === "color" && <StyledColorIcon bgColor={options.find((option) => option.isActive() === true)?.title}>T</StyledColorIcon>}
                {mode === "bgColor" && (
                    <StyledBgColorIcon
                        bgColor={options.find((option) => option.isActive() === true)?.title}
                        textColor={calculateTextColor(options.find((option) => option.isActive() === true)?.title)}
                    >
                        T
                    </StyledBgColorIcon>
                )}
            </StyledMenuButton>
            {isOpen && (
                <StyledColorOptionContainer>
                    {colors.length > 0 && (
                        <StyledColorOptionWrap>
                            {mode === "color" && <span>최근 사용한 글자색</span>}
                            {mode === "bgColor" && <span>최근 사용한 배경색</span>}
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
                                <StyledColorOption
                                    key={index}
                                    isSelected={option.isActive()}
                                    bgColor={option.title}
                                    onClick={() => handleSelectedColor(option)}
                                ></StyledColorOption>
                            ))}
                        </StyledColorOptionList>
                    </StyledColorOptionWrap>
                </StyledColorOptionContainer>
            )}
        </StyledSelectContainer>
    );
}
