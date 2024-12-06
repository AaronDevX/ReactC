export default function Answers({answers, selectedAnswer, questionState, style}) {
    let answerStyle = ""
    if(questionState === "validate"){
        if(style.type === true){
            answerStyle = "correct"
        }else{
            answerStyle = "wrong"
        }
    }


    return(
        <div id="answers">
            {answers.map((answer, index) => (
                <div key={index} className="answer">
                    <button className={style.index === index ? answerStyle : ""} onClick={()=>selectedAnswer(answer, index)}>
                        {answer}
                    </button>
                </div>
            ))}
        </div>
    )
}