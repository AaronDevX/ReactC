function Question({shuffleAnswers, answerSelected ,status, title, onRespond}) {
    return(
        <div id={"question-overview"}>
            <h2>{title}</h2>
            <ul id={"answers"}>
                {shuffleAnswers.map((answer, index) => {
                    let styles = ""
                    if((status === "correct" || status === "wrong") && answer === answerSelected){
                        styles = status
                    }
                    return <li className={"answer"} key={index}>
                        <button className={styles} onClick={() => onRespond(answer)}>
                            {answer}
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Question;