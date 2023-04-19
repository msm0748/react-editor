import styled from "@emotion/styled";

type Props = {
    fontSize?: string;
};

export const StyledEditor = styled.div<Props>`
    .toolbar {
        margin-bottom: 10px;
        display: flex;

        .box {
            padding: 0 10px;
            position: relative;
            display: flex;

            &:nth-of-type(n + 2):before {
                content: "";
                width: 1px;
                height: 16px;
                position: absolute;
                margin: auto;
                top: 0;
                bottom: 0;
                left: 0;
                background-color: #ddd;
            }

            button {
                width: 27px;
                height: 29px;
                padding: 0;
            }
        }

        button {
            cursor: pointer;
            border: none;
            background-color: #fff;
            font-size: 16px;
            border-radius: 5px;
            margin: 0 1px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: rgba(0, 0, 0, 0.07);
            }

            &.is-active {
                background-color: #333;
                color: #fff;
            }
        }

        /* 폰트 굵기 아이콘 */
        .bold {
            font-weight: 600;
        }

        /* 폰트 기울임 아이콘 */
        .italic {
            font-style: italic;
        }

        /* 폰트 취소선 아이콘 */
        .strike {
            position: relative;

            &:before {
                content: "";
                width: 10px;
                height: 1px;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: auto;
                border-width: 1px;
                border-style: solid;
                border-color: #fff;
                background-color: #000;
            }

            &.is-active:before {
                border-color: #000;
                background-color: #fff;
            }
        }

        /* 구분선 */
        .line i {
            width: 20px;
            height: 1px;
            background-color: #000;
        }
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

            /* 텍스트 없을 때 커서 사이즈 유지 */
            &:last-child:has(br) {
                font-size: ${(props) => props.fontSize};
            }
        }

        ol {
            padding-left: 30px;
        }
    }
`;
