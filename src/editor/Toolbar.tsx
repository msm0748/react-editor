import { useEditor } from "@tiptap/react";

type MenuBarProps = {
    editor: ReturnType<typeof useEditor>;
};

export default function MenuBar({ editor }: MenuBarProps) {
    if (!editor) {
        return null;
    }

    return (
        <div className="toolbar">
            <div className="box">
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
                >
                    H1
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
                >
                    H2
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
                >
                    H3
                </button>
            </div>
            <div className="box">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    className={`bold ${editor.isActive("bold") ? "is-active" : ""}`}
                >
                    B
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={!editor.can().chain().focus().toggleItalic().run()}
                    className={`italic ${editor.isActive("italic") ? "is-active" : ""}`}
                >
                    I
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={!editor.can().chain().focus().toggleStrike().run()}
                    className={`strike ${editor.isActive("strike") ? "is-active" : ""}`}
                >
                    T
                </button>
            </div>
            <div className="box">
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`list-bullet ${editor.isActive("bulletList") ? "is-active" : ""}`}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"></path>
                    </svg>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`list-decimal ${editor.isActive("orderedList") ? "is-active" : ""}`}
                >
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"></path>
                    </svg>
                </button>
            </div>
            <div className="box">
                <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className="line">
                    <i></i>
                </button>
            </div>
        </div>
    );
}
