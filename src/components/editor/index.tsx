import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";
import { StyledEditor } from "./Eiditor.styled";

export default function Editor() {
    // const [editorContent, setEditorContent] = useState("");

    const editor = useEditor({
        extensions: [
            StarterKit,
            Color,
            TextStyle,
            Underline,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
        ],
        content: "",
        onUpdate({ editor }) {
            // setEditorContent(editor.getHTML());
        },
    });

    return (
        <StyledEditor>
            {editor && <Toolbar editor={editor} />}
            <EditorContent editor={editor} />
        </StyledEditor>
    );
}
