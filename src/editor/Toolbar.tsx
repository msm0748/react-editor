import { useEditor } from "@tiptap/react";
import { Fragment } from "react";
import { MenuButton } from "../components/common/button";
import { BulletListIcon, OrderedListIcon } from "../components/common/Icon";
import { Select } from "../components/common/select";

interface Props {
    editor: ReturnType<typeof useEditor>;
}

export default function MenuBar({ editor }: Props) {
    if (!editor) {
        return null;
    }

    const headingItems = [
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
    ];

    const items = [
        {
            type: "divider",
        },
        {
            icon: "B",
            title: "굵기",
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive("bold"),
            wrapperClassName: "bold",
        },
        {
            icon: "I",
            title: "기울기",
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive("italic"),
            wrapperClassName: "italic",
        },
        {
            icon: "T",
            title: "취소선",
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive("strike"),
            wrapperClassName: "strike",
        },
        {
            type: "divider",
        },
        {
            icon: <BulletListIcon />,
            title: "기호목록",
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive("bulletList"),
        },
        {
            icon: <OrderedListIcon />,
            title: "순서목록",
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive("orderedList"),
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
            <Select options={headingItems} />
            {items.map((item, index) => (
                <Fragment key={index}>
                    {/* <MenuButton {...item} /> */}
                    {item.type === "divider" ? <div className="divider" /> : <MenuButton {...item} />}
                </Fragment>
            ))}
        </div>
    );
}
