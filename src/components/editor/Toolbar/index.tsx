import { Editor } from "@tiptap/react";
import Icon from "../common/Icon";
import { colors } from "./defaultColors";
import RenderMenuItem from "./Render";
import { StyledToolbar } from "./Toolbar.styled";

interface Props {
    editor: Editor;
}

export default function MenuBar({ editor }: Props) {
    const menuItems: EditorMenuItem[][] = [
        [
            {
                type: "heading",
                options: [
                    {
                        title: "제목1",
                        action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
                        isActive: () => editor.isActive("heading", { level: 1 }),
                    },
                    {
                        title: "제목2",
                        action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
                        isActive: () => editor.isActive("heading", { level: 2 }),
                    },
                    {
                        title: "제목3",
                        action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
                        isActive: () => editor.isActive("heading", { level: 3 }),
                    },
                    {
                        title: "본문",
                        action: () => editor.chain().focus().setParagraph().run(),
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
                action: () => editor.chain().focus().toggleBold().run(),
                isActive: () => editor.isActive("bold"),
            },
            {
                type: "button",
                icon: <Icon icon="italic" />,
                title: "기울기",
                action: () => editor.chain().focus().toggleItalic().run(),
                isActive: () => editor.isActive("italic"),
            },
            {
                type: "button",
                icon: <Icon icon="underline" />,
                title: "밑줄",
                action: () => editor.chain().focus().toggleUnderline().run(),
                isActive: () => editor.isActive("underline"),
            },
            {
                type: "button",
                icon: <Icon icon="strikethrough" />,
                title: "취소선",
                action: () => editor.chain().focus().toggleStrike().run(),
                isActive: () => editor.isActive("strike"),
            },
            {
                type: "colorPicker",
                title: "글자색",
                options: colors.map((color) => ({
                    color,
                })),
                action: (value: string) => editor.chain().focus().setColor(value).run(),
                isActive: (value: string) => editor.isActive("textStyle", { color: value }),
                getAttributes: () => editor.getAttributes("textStyle").color,
            },
            {
                type: "bgColorPicker",
                title: "배경색",
                options: colors.map((color) => ({
                    color,
                })),
                action: (value: string) => editor.chain().focus().setHighlight({ color: value }).run(),
                isActive: (value: string) => editor.isActive("highlight", { color: value }),
                getAttributes: () => editor.getAttributes("highlight").color,
            },
        ],
        [
            {
                type: "button",
                icon: <Icon icon={"unorderedList"} />,
                title: "기호목록",
                action: () => editor.chain().focus().toggleBulletList().run(),
                isActive: () => editor.isActive("bulletList"),
            },
            {
                type: "button",
                icon: <Icon icon={"orderedList"} />,
                title: "순서목록",
                action: () => editor.chain().focus().toggleOrderedList().run(),
                isActive: () => editor.isActive("orderedList"),
            },
        ],
        [
            {
                type: "button",
                icon: <Icon icon="alignLeft" />,
                title: "왼쪽정렬",
                action: () => editor.chain().focus().setTextAlign("left").run(),
                isActive: () => editor.isActive({ textAlign: "left" }),
            },
            {
                type: "button",
                icon: <Icon icon="alignCenter" />,
                title: "가운데 정렬",
                action: () => editor.chain().focus().setTextAlign("center").run(),
                isActive: () => editor.isActive({ textAlign: "center" }),
            },
            {
                type: "button",
                icon: <Icon icon="alignRight" />,
                title: "오른쪽 정렬",
                action: () => editor.chain().focus().setTextAlign("right").run(),
                isActive: () => editor.isActive({ textAlign: "right" }),
            },
            {
                type: "button",
                icon: <Icon icon="alignJustify" />,
                title: "양쪽 정렬",
                action: () => editor.chain().focus().setTextAlign("justify").run(),
                isActive: () => editor.isActive({ textAlign: "justify" }),
            },
        ],
        [
            {
                type: "button",
                icon: <Icon icon="horizontalRule" />,
                title: "구분선",
                action: () => {
                    editor.chain().focus().setHorizontalRule().run();
                    editor.chain().focus().setHardBreak().run();
                },
                isActive: () => editor.isActive("horizontalRule"),
            },
            {
                type: "link",
                icon: <Icon icon="link" />,
                title: "링크",
                isDragging: !editor.state.selection.empty,
                action: (url: string) => editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run(),
                customAction: (url: string) => editor.chain().focus().insertContent(`<a href="${url}">${url}</a>`).run(),
                unset: () => editor.chain().focus().unsetLink().run(),
                isActive: () => editor.isActive("link"),
                getAttributes: () => editor.getAttributes("link").href,
            },
            {
                type: "button",
                icon: <Icon icon={"blockquote"} />,
                title: "인용구",
                action: () => editor.chain().focus().toggleBlockquote().run(),
                isActive: () => editor.isActive("blockquote"),
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
