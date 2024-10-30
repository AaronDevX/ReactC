export default function Modal({children}) {
    return (
        <dialog
            ref={dialog}
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{}</Button>
            </form>
        </dialog>
    )
}