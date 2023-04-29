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

interface EditorColorSelectType extends EditorColorSelectProps {
    type: "colorSelect" | "bgColorSelect";
}

type EditorMenuItem = DropDownType | ButtonType | ColorSelectType;
