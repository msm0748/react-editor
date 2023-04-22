import { useEditor } from "@tiptap/react";
import { Fragment } from "react";
import { MenuButton } from "../components/common/button";
import Icon from "../components/common/Icon";
import { Select } from "../components/common/select";

interface Props {
    editor: ReturnType<typeof useEditor>;
}

export default function MenuBar({ editor }: Props) {
    if (!editor) {
        return null;
    }

    const groupItems = {
        heading: [
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
    };

    const items = [
        {
            type: "divider",
        },
        {
            icon: <Icon icon="bold" />,
            title: "굵기",
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive("bold"),
            wrapperClassName: "bold",
        },
        {
            icon: <Icon icon="italic" />,
            title: "기울기",
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive("italic"),
            wrapperClassName: "italic",
        },
        {
            icon: <Icon icon="strikethrough" />,
            title: "취소선",
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive("strike"),
            wrapperClassName: "strike",
        },
        {
            type: "divider",
        },
        {
            icon: <Icon icon={"unorderedList"} />,
            title: "기호목록",
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive("bulletList"),
        },
        {
            icon: <Icon icon={"orderedList"} />,
            title: "순서목록",
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive("orderedList"),
        },
        {
            type: "divider",
        },

        {
            icon: <Icon icon="alignLeft" />,
            title: "왼쪽정렬",
            action: () => editor.chain().focus().setTextAlign("left").run(),
            isActive: () => editor.isActive({ textAlign: "left" }),
        },
        {
            icon: <Icon icon="alignCenter" />,
            title: "가운데 정렬",
            action: () => editor.chain().focus().setTextAlign("center").run(),
            isActive: () => editor.isActive({ textAlign: "center" }),
        },
        {
            icon: <Icon icon="alignRight" />,
            title: "오른쪽 정렬",
            action: () => editor.chain().focus().setTextAlign("right").run(),
            isActive: () => editor.isActive({ textAlign: "right" }),
        },
        {
            icon: <Icon icon="alignJustify" />,
            title: "양쪽 정렬",
            action: () => editor.chain().focus().setTextAlign("justify").run(),
            isActive: () => editor.isActive({ textAlign: "justify" }),
        },
        {
            type: "divider",
        },
        {
            icon: <i></i>,
            title: "구분선",
            action: () => editor.chain().focus().setHorizontalRule().run(),
            wrapperClassName: "line",
        },
    ];

    return (
        <div className="toolbar">
            <Select options={groupItems.heading} />
            {items.map((item, index) => (
                <Fragment key={index}>
                    {/* <MenuButton {...item} /> */}
                    {item.type === "divider" ? <div className="divider" /> : <MenuButton {...item} />}
                </Fragment>
            ))}
        </div>
    );
}
