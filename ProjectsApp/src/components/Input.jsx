export default function Input({label, textarea, ...props}) {
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">
                {label}
            </label>
            {textarea ? (
                <textarea ref={ref} className={classes} {...props} />
            ) : (
                <input ref={ref} className={classes} {...props} />
            )}
        </p>
    )
}