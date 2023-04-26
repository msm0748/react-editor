import styled from "@emotion/styled";

export const StyledEditor = styled.div`
    /* 에디터 */
    .ProseMirror {
        padding: 20px;
        height: 400px;
        border: 1px solid;
        overflow-y: auto;
        overflow-x: hidden;

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
    }
`;

export const StyledToolbar = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    .toolbar-grp {
        display: flex;
        align-items: center;
        position: relative;

        & + .toolbar-grp {
            margin-left: 19px;

            &:before {
                display: block;
                position: absolute;
                left: -10px;
                top: 0;
                bottom: 0;
                width: 1px;
                height: 20px;
                margin: auto;
                background-color: #eee;
                content: "";
            }
        }
    }
`;
