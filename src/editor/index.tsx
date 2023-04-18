import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import "./style.css";

export default function Editor() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "",
    });

    return (
        <div id="editor">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
