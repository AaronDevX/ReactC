import {useEffect, useState} from "react";

export default function Progress() {
    const [time, setTime] = useState(3000);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime - 50);
        }, 50)

        return ()=>{
            clearInterval(interval);
        }
    }, []);
    return (
        <progress max="3000" value={time}></progress>
    )
}