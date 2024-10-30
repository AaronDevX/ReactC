import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";
import Button from "../components/Button";

const Modal = forwardRef(function Modal({children}, ref) {
    const dia = useRef(null);
    useImperativeHandle(ref, () => {
        return{
            open(){
                dia.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog
            ref={dia}
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>Close</Button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    )
})

export default Modal;