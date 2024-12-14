import {useEffect, useState, useRef} from "react";

export function useInput({checkValid}) {
    const [inputData, setInputData] = useState("");
    const [isSelected, setIsSelected] = useState(null);
    const [isInvalid, setIsInvalid] = useState(false);
    const completeFirstDeselected = useRef(false)

    function handleChangeInput(value) {
        setInputData(value);
    }

    function changeSelected(value) {
        if(!completeFirstDeselected.current && !value) {
            completeFirstDeselected.current = true
        }
        setIsSelected(value);
    }

    function validate() {
        const isValid = checkValid(inputData);
        setIsInvalid(!isValid);
        return isValid;
    }

    useEffect(() => {
        if(isSelected!==null && completeFirstDeselected.current) {
            setIsInvalid(!checkValid(inputData));
        }
    }, [inputData, isSelected]);

    return {inputData, isInvalid, handleChangeInput, changeSelected, validate};
}