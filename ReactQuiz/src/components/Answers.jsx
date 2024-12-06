export default function Answers({answers, selectedAnswer, questionState, style}) {
    let answerStyle = null
    if(questionState === ""){
        answerStyle = style
    }
    return(
        <div id="answers">
            {answers.map((answer, index) => (
                <div key={index} className="answer">
                    <button className={()=>{
                        if(answerStyle === true) return "correct"
                        if(answerStyle === true) return "wrong"
                        return ""
                    }} onClick={()=>selectedAnswer(answer)}>
                        {answer}
                    </button>
                </div>
            ))}
        </div>
    )
}