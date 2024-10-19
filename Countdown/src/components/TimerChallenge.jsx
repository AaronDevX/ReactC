import {useState, useRef} from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialogResult = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime*1000);
    let timerIsActive = timeRemaining>=0 && timeRemaining<targetTime*1000;

    function handleStart(){
        timer.current = setInterval(()=>{
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleEnd(){
        clearInterval(timer.current);
        dialogResult.current.open()
    }

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialogResult.current.open()
    }

    function reset(){
        setTimeRemaining(targetTime*1000);
    }

    return (
        <>
            <ResultModal ref={dialogResult} restTime={timeRemaining} targetTime={targetTime} reset={reset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 0 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleEnd : handleStart}>
                        {timerIsActive? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className="">
                    {timerIsActive ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}