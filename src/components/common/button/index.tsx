import { StyledMenuButton } from "./Button.styld";

export const EditorMenuButton = ({ icon, title, action, isActive }: EditorButtonProps) => {
    return (
        <StyledMenuButton className={`menu-item${isActive && isActive() ? " is-active" : ""}`} onClick={action} title={title}>
            {icon}
        </StyledMenuButton>
    );
};
