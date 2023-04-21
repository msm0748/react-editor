import styled from "@emotion/styled";

export const StyledEditor = styled.div`
    .toolbar {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }
    .divider {
        background-color: #dfdfdf;
        height: 1.25rem;
        margin: 0 0.75rem;
        width: 1px;
    }

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
