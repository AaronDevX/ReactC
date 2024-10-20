import {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

const ResultModal =  forwardRef( function ResultModal({targetTime, restTime, reset}, ref) {

    const dialogRef = useRef();
    let secondsRemaining;
    let score;

    useImperativeHandle(ref, ()=>{
        return {
            open(){
                dialogRef.current.showModal()
            }
        }
    })

        secondsRemaining = restTime / 1000
        score = (100-((secondsRemaining * 100)/targetTime)).toFixed(2)


    return createPortal(
        <dialog ref={dialogRef} className="result-modal">
            {restTime>0 ? <h2>Your score is: {score}</h2> : <h2>Expired Time, You Lost</h2>}
            <p>
            The target time was <strong>{targetTime}</strong> seconds.
            </p>
            {restTime>0 && <p>You stopped the timer with <strong>{secondsRemaining} seconds left.</strong></p>}
            <form method="dialog" onSubmit={reset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
})

export default ResultModal;