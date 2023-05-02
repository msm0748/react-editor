import { StyledContainer } from "../Elements.styled";
import useModal from "../../../../hooks/useModal";
import { StyledArrowIcon, StyledMenuButton, StyledOptionItem, StyledOptionList } from "./Heading.styled";

export function Heading({ options }: EditorHeadingProps) {
    const [isOpen, selectRef, toggleOpen] = useModal();

    const handleOptionClick = (option: EditorOptions) => {
        option.action();
        toggleOpen();
    };

    return (
        <StyledContainer ref={selectRef}>
            <StyledMenuButton onClick={toggleOpen}>
                <div>{options.find((option) => option.isActive() === true)?.title}</div>
                <StyledArrowIcon isOpen={isOpen}>▼</StyledArrowIcon>
            </StyledMenuButton>
            {isOpen && (
                <StyledOptionList>
                    {options.map((option, index) => (
                        <StyledOptionItem key={index} isSelected={option.isActive()} onClick={() => handleOptionClick(option)}>
                            {option.title}
                        </StyledOptionItem>
                    ))}
                </StyledOptionList>
            )}
        </StyledContainer>
    );
}
