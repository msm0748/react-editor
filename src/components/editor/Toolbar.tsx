import { Editor } from "@tiptap/react";
import Icon from "../common/Icon";
import { colors } from "./defaultColors";
import RenderMenuItem from "./RenderMenuItem";
import { StyledToolbar } from "./Eiditor.styled";

interface Props {
    editor: Editor;
}

export default function MenuBar({ editor }: Props) {
    const menuItems = [
        [
            {
                type: "dropdown",
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
                type: "colorSelect",
                options: colors.map((val) => ({
                    title: val,
                    action: () => editor.chain().focus().setColor(val).run(), // editor.chain().focus() 함수 사용 시 최근 사용한 글자색 클릭 시 에러 발생
                    isActive: () => editor.isActive("textStyle", { color: val }),
                })),
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
                action: () => editor.chain().focus().setHorizontalRule().run(),
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
