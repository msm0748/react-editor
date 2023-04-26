import { Editor } from "@tiptap/react";
import Icon from "../common/Icon";
import { colors } from "./defaultColors";
import RenderMenuItem from "./RenderMenuItem";
import { StyledToolbar } from "./Eiditor.styled";

interface Props {
    editor: Editor;
}

export default function MenuBar({ editor }: Props) {
    const editorCommand = editor.chain().focus();

    const menuItems = [
        [
            {
                type: "dropdown",
                options: [
                    {
                        title: "제목1",
                        action: () => editorCommand.toggleHeading({ level: 1 }).run(),
                        isActive: () => editor.isActive("heading", { level: 1 }),
                    },
                    {
                        title: "제목2",
                        action: () => editorCommand.toggleHeading({ level: 2 }).run(),
                        isActive: () => editor.isActive("heading", { level: 2 }),
                    },
                    {
                        title: "제목3",
                        action: () => editorCommand.toggleHeading({ level: 3 }).run(),
                        isActive: () => editor.isActive("heading", { level: 3 }),
                    },
                    {
                        title: "본문",
                        action: () => editorCommand.setParagraph().run(),
                        isActive: () => editor.isActive("paragraph"),
                    },
                ],
            },
        ],
        [
            {
                type: "button",
                icon: <Icon icon="bold" />,
                title: "굵기",
                action: () => editorCommand.toggleBold().run(),
                isActive: () => editor.isActive("bold"),
            },
            {
                type: "button",
                icon: <Icon icon="italic" />,
                title: "기울기",
                action: () => editorCommand.toggleItalic().run(),
                isActive: () => editor.isActive("italic"),
            },
            {
                type: "button",
                icon: <Icon icon="underline" />,
                title: "밑줄",
                action: () => editorCommand.toggleUnderline().run(),
                isActive: () => editor.isActive("underline"),
            },
            {
                type: "button",
                icon: <Icon icon="strikethrough" />,
                title: "취소선",
                action: () => editorCommand.toggleStrike().run(),
                isActive: () => editor.isActive("strike"),
            },
            {
                type: "colorSelect",
                options: colors.map((val) => ({
                    title: val,
                    action: () => editorCommand.setColor(val).run(),
                    isActive: () => editor.isActive("textStyle", { color: val }),
                })),
            },
        ],
        [
            {
                type: "button",
                icon: <Icon icon={"unorderedList"} />,
                title: "기호목록",
                action: () => editorCommand.toggleBulletList().run(),
                isActive: () => editor.isActive("bulletList"),
            },
            {
                type: "button",
                icon: <Icon icon={"orderedList"} />,
                title: "순서목록",
                action: () => editorCommand.toggleOrderedList().run(),
                isActive: () => editor.isActive("orderedList"),
            },
        ],
        [
            {
                type: "button",
                icon: <Icon icon="alignLeft" />,
                title: "왼쪽정렬",
                action: () => editorCommand.setTextAlign("left").run(),
                isActive: () => editor.isActive({ textAlign: "left" }),
            },
            {
                type: "button",
                icon: <Icon icon="alignCenter" />,
                title: "가운데 정렬",
                action: () => editorCommand.setTextAlign("center").run(),
                isActive: () => editor.isActive({ textAlign: "center" }),
            },
            {
                type: "button",
                icon: <Icon icon="alignRight" />,
                title: "오른쪽 정렬",
                action: () => editorCommand.setTextAlign("right").run(),
                isActive: () => editor.isActive({ textAlign: "right" }),
            },
            {
                type: "button",
                icon: <Icon icon="alignJustify" />,
                title: "양쪽 정렬",
                action: () => editorCommand.setTextAlign("justify").run(),
                isActive: () => editor.isActive({ textAlign: "justify" }),
            },
        ],
        [
            {
                type: "button",
                icon: <Icon icon="horizontalRule" />,
                title: "구분선",
                action: () => editorCommand.setHorizontalRule().run(),
            },
        ],
    ];

    return (
        <StyledToolbar>
            {menuItems.map((group, index) => (
                <div key={index} className="toolbar-grp">
                    {group.map((item, index) => (
                        <RenderMenuItem key={index} {...item} />
                    ))}
                </div>
            ))}
        </StyledToolbar>
    );
}
