import { useState, useRef, useEffect, useCallback } from "react";

interface OptionType {
    title: string;
    action: () => void;
    isActive: () => boolean;
}

type UseSelectReturn = [isOpen: boolean, selectRef: React.RefObject<HTMLDivElement>, toggleOpen: () => void, handleOptionClick: (option: OptionType) => void];

export function useModal(): UseSelectReturn {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const toggleOpen = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const handleOptionClick = useCallback((option: OptionType) => {
        option.action();
        setIsOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return [isOpen, selectRef, toggleOpen, handleOptionClick];
}
