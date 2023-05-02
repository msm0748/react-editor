import { useEffect, useRef } from "react";
import { EditorMenuButton } from "../button";
import { StyledColorOptionContainer, StyledConfirmButton, StyledInput, StyledSelectContainer } from "./Select.styled";
import useModal from "../../../hooks/useModal";
import useInput from "../../../hooks/useInput";
import styled from "@emotion/styled";

export function Link({ title, icon, isDragging, action, customAction, unset, isActive, getAttributes }: EditorLinkTpye) {
    const urlInputRef = useRef<HTMLInputElement>(null);
    const [isOpen, selectRef, toggleOpen] = useModal();
    const [url, onChangeUrl] = useInput();

    const handleAction = () => {
        const href = getAttributes();
        href ? onChangeUrl(href) : onChangeUrl("");
        toggleOpen();
    };

    const handleConfirm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const regex = /^(http|https):/i;
        const resultUrl = regex.test(url) ? url : `http://${url}`.replace(/ /g, "");

        if (isActive()) {
            action(resultUrl);
        } else {
            // 드래그 중일 경우 해당 text에 a 링크 적용 | 아닐 경우 a link 생성
            isDragging ? action(resultUrl) : customAction(resultUrl);
        }

        onChangeUrl("");
        toggleOpen();
    };

    const handleUnset = () => {
        unset();
        toggleOpen();
    };

    useEffect(() => {
        if (urlInputRef.current && isOpen) {
            urlInputRef.current.focus();
        }
    }, [isOpen]);

    return (
        <StyledSelectContainer ref={selectRef}>
            <EditorMenuButton title={title} icon={icon} action={handleAction} isActive={isActive} />
            {isOpen && (
                <StyledColorOptionContainer width={300} style={{ padding: "18px 22px" }}>
                    <form onSubmit={handleConfirm}>
                        <StyledInput ref={urlInputRef} type="text" value={url} onChange={onChangeUrl} placeholder="URL" />
                        <StyledButtonWrap>
                            {isActive() === true && (
                                <StyledConfirmButton type="button" onClick={handleUnset}>
                                    링크 해제
                                </StyledConfirmButton>
                            )}
                            <StyledConfirmButton type="submit" disabled={/^\s*$/.test(url)}>
                                확인
                            </StyledConfirmButton>
                        </StyledButtonWrap>
                    </form>
                </StyledColorOptionContainer>
            )}
        </StyledSelectContainer>
    );
}

const StyledButtonWrap = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;
