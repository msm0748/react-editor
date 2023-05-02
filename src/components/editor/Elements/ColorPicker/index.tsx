import { useEffect, useState } from "react";
import { ChromePicker } from "react-color";

import { StyledContainer, StyledOptionContainer, StyledConfirmButton } from "../Elements.styled";
import useModal from "../../../../hooks/useModal";
import { EditorCustomMenuButton } from "../../common/Button";
import {
    StyledBgColorIcon,
    StyledChromePicker,
    StyledColorIcon,
    StyledDefaultOptionItem,
    StyledMoreButton,
    StyledOptionItem,
    StyledOptionList,
    StyledOptionWrap,
} from "./ColorPicker.styled";

interface Props extends EditorColorPickerProps {
    mode: "color" | "bgColor";
}

export function ColorPicker({ title, options, mode, action, isActive, getAttributes }: Props) {
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
        <StyledContainer ref={selectRef}>
            <EditorCustomMenuButton title={title} action={toggleOpen}>
                {mode === "color" ? (
                    <StyledColorIcon bgColor={color}>T</StyledColorIcon>
                ) : (
                    <StyledBgColorIcon bgColor={color} textColor={calculateTextColor(color)}>
                        T
                    </StyledBgColorIcon>
                )}
            </EditorCustomMenuButton>
            {isOpen && (
                <StyledOptionContainer width={154}>
                    {colors.length > 0 && (
                        <StyledOptionWrap>
                            {mode === "color" ? <span>최근 사용한 글자색</span> : <span>최근 사용한 배경색</span>}
                            <StyledOptionList>
                                {colors.map((color, index) => (
                                    <StyledOptionItem key={index} bgColor={color} onClick={() => handleSelectedColor(color)}></StyledOptionItem>
                                ))}
                            </StyledOptionList>
                        </StyledOptionWrap>
                    )}

                    <StyledOptionWrap>
                        <StyledOptionList>
                            <StyledDefaultOptionItem bgColor={"default"} onClick={() => handleSelectedColor("default")}></StyledDefaultOptionItem>
                            {options.map((option, index) => (
                                <StyledOptionItem
                                    key={index}
                                    isSelected={isActive(option.color)}
                                    bgColor={option.color}
                                    onClick={() => handleSelectedColor(option.color)}
                                ></StyledOptionItem>
                            ))}
                        </StyledOptionList>
                        {isChromePickerOpen && (
                            <StyledChromePicker>
                                <ChromePicker disableAlpha color={chromePickercolor} onChange={(color) => setChromePickerColor(color.hex)} />
                                <StyledConfirmButton onClick={() => handleSelectedColor(chromePickercolor)}>확인</StyledConfirmButton>
                            </StyledChromePicker>
                        )}

                        <StyledMoreButton isOpen={isChromePickerOpen} onClick={() => setIsChromePickerOpen((prev) => !prev)}>
                            <span>{isChromePickerOpen ? "접기" : "더 보기"}</span>
                        </StyledMoreButton>
                    </StyledOptionWrap>
                </StyledOptionContainer>
            )}
        </StyledContainer>
    );
}
