import { ReactNode } from "react";
import { StyledMenuButton } from "./Button.styld";

interface MenuButtonProps {
    icon?: string | ReactNode;
    title?: string;
    action?: () => void;
    isActive?: () => boolean | null;
    wrapperClassName?: string;
}

export const MenuButton = ({ icon, title, action, isActive, wrapperClassName }: MenuButtonProps) => {
    return (
        <StyledMenuButton
            className={`menu-item${isActive && isActive() ? " is-active" : ""} ${wrapperClassName ? wrapperClassName : ""}`}
            onClick={action}
            title={title}
        >
            {icon}
        </StyledMenuButton>
    );
};
