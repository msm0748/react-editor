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
