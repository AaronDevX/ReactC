import {useEffect, useState} from "react";

export default function ProgressBar({barStyle, initialTime}) {
    const [time, setTime] = useState(initialTime);

    useEffect(()=>{
        setTime(initialTime);

        const interval = setInterval(() => {
            setTime(prevTime => {
                if(prevTime > 0){
                    return prevTime - 50;
                }
                clearInterval(interval);
            })
        }, 50)
        return () => {
            clearInterval(interval)
        }
    }, [initialTime, barStyle])


    return (
        <progress className={barStyle} value={time} max={initialTime}></progress>
    )
}