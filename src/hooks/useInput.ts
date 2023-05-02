import { useCallback, useState } from "react";

type UseInputReturn = [value: string, onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void];

export default function useInput(): UseInputReturn {
    const [value, setValue] = useState("");
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | string) => {
        if (typeof e === "string") {
            setValue(e);
        } else {
            setValue(e.target.value);
        }
    }, []);
    return [value, onChange];
}
