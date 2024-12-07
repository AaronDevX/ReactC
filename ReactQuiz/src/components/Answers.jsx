import {useRef} from "react";

export default function Answers({answers, selectedAnswer, answerState, onSelect}) {
    const shuffledAnswers = useRef(null)

    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5)
    }

    return (<ul id="answers">
        {shuffledAnswers.current.map((answer, i) => {
            const isSelected = selectedAnswer === answer;
            let cssClasses = ""

            if (isSelected) {
                cssClasses = "selected"
            }
            if ((answerState === "correct" || answerState === "wrong") && isSelected) {
                cssClasses = answerState
            }

            return (<li key={i} className="answer">
                <button
                    className={cssClasses}
                    onClick={() => onSelect(answer)}
                    disabled={selectedAnswer !== ""}>
                    {answer}
                </button>
            </li>)
        })}
    </ul>)
}