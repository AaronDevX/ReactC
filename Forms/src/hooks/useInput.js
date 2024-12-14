import {useEffect, useState} from "react";

export function useInput({checkValid}) {
    const [inputData, setInputData] = useState("");
    const [isSelected, setIsSelected] = useState(null);
    const [isInvalid, setIsInvalid] = useState(false);


    function handleChangeInput(value) {
        setInputData(value);
    }

    function changeSelected(value) {
        setIsSelected(value);
    }

    useEffect(() => {
        if(!isSelected) {
           setIsInvalid(checkValid(inputData));
        }
        return ()=> setIsInvalid(false);
    }, [inputData, isSelected]);

    return {inputData, isInvalid, handleChangeInput, changeSelected}
}