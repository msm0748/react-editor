import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Toolbar from "./Toolbar";
import Highlight from "@tiptap/extension-highlight";
import { StyledEditor } from "./Eiditor.styled";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import Blockquote from "@tiptap/extension-blockquote";
import Link from "@tiptap/extension-link";
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { lowlight } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

lowlight.registerLanguage("html", html);
lowlight.registerLanguage("css", css);
lowlight.registerLanguage("js", js);
lowlight.registerLanguage("ts", ts);

export default function Editor() {
    // const [editorContent, setEditorContent] = useState("");

    const editor = useEditor({
        extensions: [
            StarterKit,
            Color,
            TextStyle,
            Underline,
            BubbleMenu,
            Blockquote,
            CodeBlockLowlight.configure({
                lowlight,
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
            Link.configure({
                openOnClick: false,
                autolink: true,
            }),
            Highlight.configure({ multicolor: true }),
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
