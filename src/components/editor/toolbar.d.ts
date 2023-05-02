interface EditorOptions {
    title: string;
    action: () => void;
    isActive: () => boolean;
}

interface EditorButtonOptions {
    title: string;
    action: () => void;
    isActive?: () => boolean;
}

interface EditorDropDownProps {
    options: EditorOptions[];
}

interface EditorButtonProps extends EditorButtonOptions {
    icon: JSX.Element;
}

interface EditorColorSelectProps {
    options: {
        color: string;
    }[];
    action: (value: string) => void;
    isActive: (value: string) => boolean;
    getAttributes: () => string | undefined;
}

interface EditorDropDownType extends EditorDropDownProps {
    type: "dropdown";
}

interface EditorButtonType extends EditorButtonProps {
    type: "button";
}

interface EditorLinkTpye {
    title: "link";
    icon: JSX.Element;
    isDragging: boolean;
    action: (url: string) => void;
    customAction: (url: string) => void;
    unset: () => void;
    isActive: () => boolean;
    getAttributes: () => string | undefined;
}

interface EditorColorSelectType extends EditorColorSelectProps {
    type: "colorSelect" | "bgColorSelect";
}

type EditorMenuItem = DropDownType | ButtonType | ColorSelectType | EditorLinkTpye;
