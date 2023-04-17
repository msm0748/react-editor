import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

export default function Editor() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: "",
    });

    return (
        <div id="editor">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} style={{ border: "1px solid" }} />
        </div>
    );
}
