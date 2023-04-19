import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import { FontSize } from "./lib/font-size";
import Toolbar from "./Toolbar";
import { useCallback, useState } from "react";
import { StyledEditor } from "./styledEditor";

export default function Editor() {
    // const [editorContent, setEditorContent] = useState("");
    const [fontSize, setFontSize] = useState<string>("16px");

    const editor = useEditor({
        extensions: [StarterKit, Color, TextStyle, FontSize],
        content: "",
        onCreate({ editor }) {
            editor.chain().focus().setFontSize(`${fontSize}`).run();
        },
        onUpdate({ editor }) {
            // setEditorContent(editor.getHTML());
            if (editor.isEmpty) {
                const currentFontSize = editor.getAttributes("textStyle").fontSize;
                const newFontSize = currentFontSize || `${fontSize}`;

                editor.chain().focus().setFontSize(newFontSize).run();
                setFontSize(newFontSize);
            }
        },
    });

    const handleFontSizeChange = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            if (!editor) return null;
            const button = event.target as HTMLButtonElement;
            const fontSize = button.innerText;
            setFontSize(`${fontSize}px`);
            editor.chain().focus().setFontSize(`${fontSize}px`).run();
        },
        [editor]
    );

    return (
        <StyledEditor fontSize={fontSize}>
            <Toolbar editor={editor} onFontSizeChange={handleFontSizeChange} />
            <EditorContent editor={editor} />
        </StyledEditor>
    );
}
