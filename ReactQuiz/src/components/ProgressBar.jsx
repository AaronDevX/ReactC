import {useEffect, useState} from 'react';

function ProgressBar({status, answerState, autoSelect}) {
    let styles = ""
    let time = 10000
    if(status === 'pending'){
        time = 1500;
        styles="answered";
    }
    if(status === 'correct' || status === "wrong") time = 2000

    const [progress, setProgress] = useState(time)

    useEffect(() => {
        const restTime = setTimeout(()=>{
            autoSelect()
        }, time)

        return ()=>clearTimeout(restTime)
    }, [answerState])

    useEffect(() => {
        setProgress(time)
        const timer = setInterval(()=>{
            setProgress(progress => progress - 50)
        }, 50)

        return ()=>clearInterval(timer)
    }, [time, answerState])

    return(<progress max={time} value={progress} className={styles}/>)
}

export default ProgressBar;