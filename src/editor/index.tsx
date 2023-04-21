import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Toolbar from "./Toolbar";
import { StyledEditor } from "./Eiditor.styled";

export default function Editor() {
    // const [editorContent, setEditorContent] = useState("");

    const editor = useEditor({
        extensions: [StarterKit, Color, TextStyle],
        content: "",
        onUpdate({ editor }) {
            // setEditorContent(editor.getHTML());
        },
    });

    return (
        <StyledEditor>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </StyledEditor>
    );
}
