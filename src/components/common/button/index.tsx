import { ReactNode } from "react";
import { StyledMenuButton } from "./Button.styld";

interface MenuButtonProps {
    icon?: string | ReactNode;
    title?: string;
    action?: () => boolean;
    isActive?: () => boolean | null;
}

export const MenuButton = ({ icon, title, action, isActive }: MenuButtonProps) => {
    return (
        <StyledMenuButton className={`menu-item${isActive && isActive() ? " is-active" : ""}`} onClick={action} title={title}>
            {icon}
        </StyledMenuButton>
    );
};
