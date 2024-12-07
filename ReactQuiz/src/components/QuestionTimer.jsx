import {useEffect, useState} from "react";

export default function QuestionTimer({onTimeout, answer}) {
    let timer;
    let styles = "";

    if(answer.selected === ""){
        timer = 4000
    }else if(answer.isCorrect === null){
        timer = 1000
        styles = "answered"
    }else{
        timer = 2000
    }

    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        const timeExpires = setTimeout(onTimeout, timer);

        return () => clearTimeout(timeExpires);
    }, [answer, onTimeout]);


    useEffect(() => {
            setRemainingTime(timer);
            const restTime = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100);
        }, 100)

        return () => clearInterval(restTime);
    }, [answer]);

    return <progress max={timer} value={remainingTime} className={styles}/>
}