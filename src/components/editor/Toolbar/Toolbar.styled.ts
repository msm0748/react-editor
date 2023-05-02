import styled from "@emotion/styled";

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
