import { useEditor } from "@tiptap/react";
import { Fragment } from "react";
import { MenuButton } from "../common/button";
import Icon from "../common/Icon";
import { ColorSelect, DropDown } from "../common/select";

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
        color: [
            {
                title: "#000000",
                action: () => editor.chain().focus().setColor("#000").run(),
                isActive: () => editor.isActive("textStyle", { color: "#000" }),
            },
            {
                title: "#e60000",
                action: () => editor.chain().focus().setColor("#e60000").run(),
                isActive: () => editor.isActive("textStyle", { color: "#e60000" }),
            },
            {
                title: "#ffff00",
                action: () => editor.chain().focus().setColor("#ffff00").run(),
                isActive: () => editor.isActive("textStyle", { color: "#ffff00" }),
            },
            {
                title: "#ff9900",
                action: () => editor.chain().focus().setColor("#ff9900").run(),
                isActive: () => editor.isActive("textStyle", { color: "#ff9900" }),
            },
            {
                title: "#008a00",
                action: () => editor.chain().focus().setColor("#008a00").run(),
                isActive: () => editor.isActive("textStyle", { color: "#008a00" }),
            },
            {
                title: "#0066cc",
                action: () => editor.chain().focus().setColor("#0066cc").run(),
                isActive: () => editor.isActive("textStyle", { color: "#0066cc" }),
            },
            {
                title: "#9933ff",
                action: () => editor.chain().focus().setColor("#9933ff").run(),
                isActive: () => editor.isActive("textStyle", { color: "#9933ff" }),
            },
            {
                title: "#ffffff",
                action: () => editor.chain().focus().setColor("#ffffff").run(),
                isActive: () => editor.isActive("textStyle", { color: "#ffffff" }),
            },
            {
                title: "#facccc",
                action: () => editor.chain().focus().setColor("#facccc").run(),
                isActive: () => editor.isActive("textStyle", { color: "#facccc" }),
            },
            {
                title: "#ffebcc",
                action: () => editor.chain().focus().setColor("#ffebcc").run(),
                isActive: () => editor.isActive("textStyle", { color: "#ffebcc" }),
            },
            {
                title: "#ffffcc",
                action: () => editor.chain().focus().setColor("#ffffcc").run(),
                isActive: () => editor.isActive("textStyle", { color: "#ffffcc" }),
            },
            {
                title: "#cce8cc",
                action: () => editor.chain().focus().setColor("#cce8cc").run(),
                isActive: () => editor.isActive("textStyle", { color: "#cce8cc" }),
            },
            {
                title: "#cce0f5",
                action: () => editor.chain().focus().setColor("#cce0f5").run(),
                isActive: () => editor.isActive("textStyle", { color: "#cce0f5" }),
            },
            {
                title: "#ebd6ff",
                action: () => editor.chain().focus().setColor("#ebd6ff").run(),
                isActive: () => editor.isActive("textStyle", { color: "#ebd6ff" }),
            },
            {
                title: "#bbbbbb",
                action: () => editor.chain().focus().setColor("#bbbbbb").run(),
                isActive: () => editor.isActive("textStyle", { color: "#bbbbbb" }),
            },
            {
                title: "#f06666",
                action: () => editor.chain().focus().setColor("#f06666").run(),
                isActive: () => editor.isActive("textStyle", { color: "#f06666" }),
            },
            {
                title: "#ffc266",
                action: () => editor.chain().focus().setColor("#ffc266").run(),
                isActive: () => editor.isActive("textStyle", { color: "#ffc266" }),
            },
            {
                title: "#ffff66",
                action: () => editor.chain().focus().setColor("#ffff66").run(),
                isActive: () => editor.isActive("textStyle", { color: "#ffff66" }),
            },
            {
                title: "#66b966",
                action: () => editor.chain().focus().setColor("#66b966").run(),
                isActive: () => editor.isActive("textStyle", { color: "#66b966" }),
            },
            {
                title: "#66a3e0",
                action: () => editor.chain().focus().setColor("#66a3e0").run(),
                isActive: () => editor.isActive("textStyle", { color: "#66a3e0" }),
            },
            {
                title: "#c285ff",
                action: () => editor.chain().focus().setColor("#c285ff").run(),
                isActive: () => editor.isActive("textStyle", { color: "#c285ff" }),
            },
            {
                title: "#888888",
                action: () => editor.chain().focus().setColor("#888888").run(),
                isActive: () => editor.isActive("textStyle", { color: "#888888" }),
            },
            {
                title: "#a10000",
                action: () => editor.chain().focus().setColor("#a10000").run(),
                isActive: () => editor.isActive("textStyle", { color: "#a10000" }),
            },
            {
                title: "#b26b00",
                action: () => editor.chain().focus().setColor("#b26b00").run(),
                isActive: () => editor.isActive("textStyle", { color: "#b26b00" }),
            },
            {
                title: "#b2b200",
                action: () => editor.chain().focus().setColor("#b2b200").run(),
                isActive: () => editor.isActive("textStyle", { color: "#b2b200" }),
            },
            {
                title: "#006100",
                action: () => editor.chain().focus().setColor("#006100").run(),
                isActive: () => editor.isActive("textStyle", { color: "#006100" }),
            },
            {
                title: "#0047b2",
                action: () => editor.chain().focus().setColor("#0047b2").run(),
                isActive: () => editor.isActive("textStyle", { color: "#0047b2" }),
            },
            {
                title: "#6b24b2",
                action: () => editor.chain().focus().setColor("#6b24b2").run(),
                isActive: () => editor.isActive("textStyle", { color: "#6b24b2" }),
            },
            {
                title: "#444444",
                action: () => editor.chain().focus().setColor("#444444").run(),
                isActive: () => editor.isActive("textStyle", { color: "#444444" }),
            },
            {
                title: "#5c0000",
                action: () => editor.chain().focus().setColor("#5c0000").run(),
                isActive: () => editor.isActive("textStyle", { color: "#5c0000" }),
            },
            {
                title: "#663d00",
                action: () => editor.chain().focus().setColor("#663d00").run(),
                isActive: () => editor.isActive("textStyle", { color: "#663d00" }),
            },
            {
                title: "#666600",
                action: () => editor.chain().focus().setColor("#666600").run(),
                isActive: () => editor.isActive("textStyle", { color: "#666600" }),
            },
            {
                title: "#003700",
                action: () => editor.chain().focus().setColor("#003700").run(),
                isActive: () => editor.isActive("textStyle", { color: "#003700" }),
            },
            {
                title: "#002966",
                action: () => editor.chain().focus().setColor("#002966").run(),
                isActive: () => editor.isActive("textStyle", { color: "#002966" }),
            },
            {
                title: "#3d1466",
                action: () => editor.chain().focus().setColor("#3d1466").run(),
                isActive: () => editor.isActive("textStyle", { color: "#3d1466" }),
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
        },
        {
            icon: <Icon icon="italic" />,
            title: "기울기",
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive("italic"),
        },
        {
            icon: <Icon icon="underline" />,
            title: "밑줄",
            action: () => editor.chain().focus().toggleUnderline().run(),
            isActive: () => editor.isActive("underline"),
        },
        {
            icon: <Icon icon="strikethrough" />,
            title: "취소선",
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive("strike"),
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
        },
    ];

    return (
        <div className="toolbar">
            <DropDown options={groupItems.heading} />
            <ColorSelect options={groupItems.color} />
            {items.map((item, index) => (
                <Fragment key={index}>{item.type === "divider" ? <div className="divider" /> : <MenuButton {...item} />}</Fragment>
            ))}
        </div>
    );
}
