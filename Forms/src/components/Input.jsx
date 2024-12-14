export default function Input({tag, id,isInvalid, errorMessage, ...props}) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{tag}</label>
            <input
                id={id}
                {...props}
            />
            <div className="control-error">
                {isInvalid===true && <p>{errorMessage}</p>}
            </div>
        </div>
    )
}