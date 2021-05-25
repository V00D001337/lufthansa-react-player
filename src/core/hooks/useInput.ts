import { useState } from "react"

export const useInput = (initialValue: string, validation: (value: string) => void) => {
    const [value, setValue] = useState(initialValue)


    const onChange = (e: any) => {
        setValue(e.target.value);
    }

    const onBlur = (e: any) => {
        validation(e.target.value)
    }

    return {value, onChange, onBlur}
}