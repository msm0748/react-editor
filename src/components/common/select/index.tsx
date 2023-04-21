import { useState, useRef, useEffect } from "react";
import { StyledArrowIcon, StyledOption, StyledOptionList, StyledSelectBox, StyledSelectContainer, StyledSelectedOption } from "./Select.styled";

interface OptionType {
    title: string;
    action: () => void;
    isActive: () => boolean;
}

interface SelectProps {
    options: OptionType[];
}

export function Select({ options }: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: OptionType) => {
        option.action();
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);

        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

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
