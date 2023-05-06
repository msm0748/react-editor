import styled from "@emotion/styled";

export const StyledEditor = styled.div`
    /* 에디터 */
    .ProseMirror {
        padding: 20px;
        height: 400px;
        border: 1px solid;
        overflow-y: auto;
        overflow-x: hidden;
        caret-color: #000;

        &:focus {
            outline: none;
        }

        p {
            margin: 10px 0;
        }

        ol,
        ul {
            padding-left: 30px;
        }

        /** Blockquote Style */
        blockquote {
            border-left: 3px solid rgba(13, 13, 13, 0.1);
            padding-left: 1rem;
            margin-left: 0;
        }

        /** Table Style */
        table {
            border-collapse: collapse;
            margin: 0;
            overflow: hidden;
            table-layout: fixed;
            width: 100%;

            td,
            th {
                border: 2px solid #ced4da;
                box-sizing: border-box;
                min-width: 1em;
                padding: 3px 5px;
                position: relative;
                vertical-align: top;

                > * {
                    margin-bottom: 0;
                }
            }

            th {
                background-color: #f1f3f5;
                font-weight: bold;
                text-align: left;
            }

            .selectedCell:after {
                background: rgba(200, 200, 255, 0.4);
                content: "";
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                pointer-events: none;
                position: absolute;
                z-index: 2;
            }

            .column-resize-handle {
                background-color: #adf;
                bottom: -2px;
                position: absolute;
                right: -2px;
                pointer-events: none;
                top: 0;
                width: 4px;
            }
        }

        /** CodeBlock Style */
        pre {
            background: #0d0d0d;
            border-radius: 0.5rem;
            color: #fff;
            font-family: "JetBrainsMono", monospace;
            padding: 0.75rem 1rem;

            code {
                background: none;
                color: inherit;
                font-size: 0.8rem;
                padding: 0;
            }

            .hljs-comment,
            .hljs-quote {
                color: #616161;
            }

            .hljs-variable,
            .hljs-template-variable,
            .hljs-attribute,
            .hljs-tag,
            .hljs-name,
            .hljs-regexp,
            .hljs-link,
            .hljs-name,
            .hljs-selector-id,
            .hljs-selector-class {
                color: #f98181;
            }

            .hljs-number,
            .hljs-meta,
            .hljs-built_in,
            .hljs-builtin-name,
            .hljs-literal,
            .hljs-type,
            .hljs-params {
                color: #fbbc88;
            }

            .hljs-string,
            .hljs-symbol,
            .hljs-bullet {
                color: #b9f18d;
            }

            .hljs-title,
            .hljs-section {
                color: #faf594;
            }

            .hljs-keyword,
            .hljs-selector-tag {
                color: #70cff8;
            }

            .hljs-emphasis {
                font-style: italic;
            }

            .hljs-strong {
                font-weight: 700;
            }
        }
    }

    .tableWrapper {
        padding: 1rem 0;
        overflow-x: auto;
    }

    .resize-cursor {
        cursor: ew-resize;
        cursor: col-resize;
    }
`;
