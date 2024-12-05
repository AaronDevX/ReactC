export default function ProgressBar({type}) {
    return (
        <progress className={type} value="100" max="100"></progress>
    )
}