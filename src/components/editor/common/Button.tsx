import styled from "@emotion/styled";

export function EditorMenuButton({ icon, title, action, isActive }: EditorMenuButtonProps) {
    return (
        <StyledMenuButton className={`menu-item${isActive && isActive() ? " is-active" : ""}`} onClick={action} title={title}>
            {icon}
        </StyledMenuButton>
    );
}

interface EditorCustomMenuButtonProps {
    title: string;
    action: () => void;
    children: JSX.Element;
}

export function EditorCustomMenuButton({ title, action, children }: EditorCustomMenuButtonProps) {
    return (
        <StyledMenuButton className={`menu-item`} onClick={action} title={title}>
            {children}
        </StyledMenuButton>
    );
}

const StyledMenuButton = styled.button`
    width: 28px;
    height: 28px;
    padding: 0;
    overflow: hidden;
    cursor: pointer;
    border: none;
    background-color: #fff;
    font-size: 16px;
    border-radius: 5px;
    margin: 0 1px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.07);
    }

    &.is-active {
        background-color: #333;
        color: #fff;
    }
`;
