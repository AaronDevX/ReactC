export default function Input({tag, id, error, ...props}) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{tag}</label>
            <input id={id} {...props}/>
            <div className="control-error">
                {error && <p>{error}</p>}
            </div>
        </div>
    )
}