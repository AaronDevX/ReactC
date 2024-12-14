import {useInput} from "../hooks/useInput.js";

export default function Input({tag, id, errorMessage, checkValid, ...props}) {
    const {inputData, isInvalid, handleChangeInput, changeSelected} = useInput({checkValid})

    return (
        <div className="control no-margin">
            <label htmlFor={id}>{tag}</label>
            <input
                id={id}
                {...props}
                value={inputData}
                onChange={(e) => handleChangeInput(e.target.value)}
                onFocus={() => changeSelected(true)}
                onBlur={() => changeSelected(false)}
            />
            <div className="control-error">
                {isInvalid && <p>{errorMessage}</p>}
            </div>
        </div>
    )
}