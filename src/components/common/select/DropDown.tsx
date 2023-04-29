import { StyledArrowIcon, StyledOption, StyledOptionList, StyledSelectBox, StyledSelectContainer, StyledSelectedOption } from "./Select.styled";
import { useModal } from "./useModal";

export function DropDown({ options }: EditorDropDownProps) {
    const [isOpen, selectRef, toggleOpen] = useModal();

    const handleOptionClick = (option: EditorOptions) => {
        option.action();
        toggleOpen();
    };

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
