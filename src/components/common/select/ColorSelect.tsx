import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

import {
    StyledColorOption,
    StyledSelectContainer,
    StyledColorOptionList,
    StyledColorIcon,
    StyledColorOptionContainer,
    StyledColorOptionWrap,
    StyledBgColorIcon,
    StyledMoreButton,
    StyledChromePicker,
    StyledConfirmButton,
    StyledDefaultColorOption,
} from "./Select.styled";
import useModal from "../../../hooks/useModal";
import { StyledMenuButton } from "../button/Button.styld";

interface Props extends EditorColorSelectProps {
    mode: "color" | "bgColor";
}

export function ColorSelect({ options, mode, action, isActive, getAttributes }: Props) {
    const [isOpen, selectRef, toggleOpen] = useModal();

    const [color, setColor] = useState<string>("");
    const [colors, setColors] = useState<string[]>([]);
    const [chromePickercolor, setChromePickerColor] = useState<string>("");
    const [isChromePickerOpen, setIsChromePickerOpen] = useState(false);

    const handleSelectedColor = (color: string) => {
        if (color === "default") {
            mode === "color" ? action("#000000") : action("#ffffff");
        } else {
            action(color);
        }
        // 최근 사용한 글자색 7개 추출
        setColors((prev: string[]) => {
            const newColors = [color, ...prev.filter((value) => value !== color)].slice(0, 7);
            return newColors;
        });
        toggleOpen();
        setIsChromePickerOpen(false);
    };

    // 배경색의 밝기 계산
    const calculateTextColor = (bgColor: string) => {
        const brightness = (parseInt(bgColor.slice(1), 16) >> 16) + ((parseInt(bgColor.slice(1), 16) >> 8) & 255) + (parseInt(bgColor.slice(1), 16) & 255) / 3;
        // 밝기가 240 이상인 경우 어두운 색상, 그렇지 않으면 밝은 색상으로 처리 (숫자가높을 수록 밝음)
        return brightness >= 240 ? "#000" : "#fff";
    };

    useEffect(() => {
        const color = getAttributes();
        if (color) {
            setColor(color);
            setChromePickerColor(color);
        } else {
            const defaultColor = mode === "color" ? "#000000" : "#ffffff";
            setColor(defaultColor);
            setChromePickerColor(defaultColor);
        }
    }, [action, getAttributes, mode]);

    // 다른 곳 클릭 했을 때 이전 값으로 복원
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setChromePickerColor(color);
                setIsChromePickerOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [selectRef, color]);

    return (
        <StyledSelectContainer ref={selectRef}>
            <StyledMenuButton className={"menu-ite"} onClick={toggleOpen}>
                {mode === "color" ? (
                    <StyledColorIcon bgColor={color}>T</StyledColorIcon>
                ) : (
                    <StyledBgColorIcon bgColor={color} textColor={calculateTextColor(color)}>
                        T
                    </StyledBgColorIcon>
                )}
            </StyledMenuButton>
            {isOpen && (
                <StyledColorOptionContainer width={154}>
                    {colors.length > 0 && (
                        <StyledColorOptionWrap>
                            {mode === "color" ? <span>최근 사용한 글자색</span> : <span>최근 사용한 배경색</span>}
                            <StyledColorOptionList>
                                {colors.map((color, index) => (
                                    <StyledColorOption key={index} bgColor={color} onClick={() => handleSelectedColor(color)}></StyledColorOption>
                                ))}
                            </StyledColorOptionList>
                        </StyledColorOptionWrap>
                    )}

                    <StyledColorOptionWrap>
                        <StyledColorOptionList>
                            <StyledDefaultColorOption bgColor={"default"} onClick={() => handleSelectedColor("default")}></StyledDefaultColorOption>
                            {options.map((option, index) => (
                                <StyledColorOption
                                    key={index}
                                    isSelected={isActive(option.color)}
                                    bgColor={option.color}
                                    onClick={() => handleSelectedColor(option.color)}
                                ></StyledColorOption>
                            ))}
                        </StyledColorOptionList>
                        {isChromePickerOpen && (
                            <StyledChromePicker>
                                <ChromePicker disableAlpha color={chromePickercolor} onChange={(color) => setChromePickerColor(color.hex)} />
                                <StyledConfirmButton onClick={() => handleSelectedColor(chromePickercolor)}>확인</StyledConfirmButton>
                            </StyledChromePicker>
                        )}

                        <StyledMoreButton isOpen={isChromePickerOpen} onClick={() => setIsChromePickerOpen((prev) => !prev)}>
                            <span>{isChromePickerOpen ? "접기" : "더 보기"}</span>
                        </StyledMoreButton>
                    </StyledColorOptionWrap>
                </StyledColorOptionContainer>
            )}
        </StyledSelectContainer>
    );
}
