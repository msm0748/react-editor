interface EditorOptions {
    title: string;
    action: () => void;
    isActive: () => boolean;
}

// 메뉴 버튼 타입
interface EditorMenuButtonProps {
    icon: JSX.Element;
    title: string;
    action: () => void;
    isActive?: () => boolean;
}

interface EditorMenuButtonType extends EditorMenuButtonProps {
    type: "button";
}

// 헤딩 타입
interface EditorHeadingProps {
    options: EditorOptions[];
}

interface EditorHeadingType extends EditorHeadingProps {
    type: "heading";
}

// 컬러 선택 타입
interface EditorColorPickerProps {
    title: string;
    options: {
        color: string;
    }[];
    action: (value: string) => void;
    isActive: (value: string) => boolean;
    getAttributes: () => string | undefined;
}

interface EditorColorPickerType extends EditorColorPickerProps {
    type: "colorPicker" | "bgColorPicker";
}

// 링크 타입
interface EditorLinkProps {
    title: string;
    icon: JSX.Element;
    isDragging: boolean;
    action: (url: string) => void;
    customAction: (url: string) => void;
    unset: () => void;
    isActive: () => boolean;
    getAttributes: () => string | undefined;
}
interface EditorLinkTpye extends EditorLinkProps {
    type: "link";
}

type EditorMenuItem = EditorHeadingType | EditorMenuButtonType | EditorColorPickerType | EditorLinkTpye;
