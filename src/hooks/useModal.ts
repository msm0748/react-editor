import { useState, useRef, useEffect, useCallback } from "react";

type UseSelectReturn = [isOpen: boolean, selectRef: React.RefObject<HTMLDivElement>, toggleOpen: () => void];

export default function useModal(): UseSelectReturn {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);
    const toggleOpen = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

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

    return [isOpen, selectRef, toggleOpen];
}
