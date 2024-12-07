import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from "../questions.js";
import Answers from "./Answers.jsx";
import {useCallback, useState} from "react";

export default function Questions({index, onSelectAnswer}) {
    const [answer, setAnswer] = useState({
        selected: "",
        isCorrect: null
    });

    function handleSelectAnswer(answer) {
        setAnswer({
            answer: answer,
            isCorrect: null
        })

        setTimeout(()=>{
            setAnswer({
                selected: answer,
                isCorrect: answer === QUESTIONS[index].answers[0]
            })
            setTimeout(()=>onSelectAnswer(answer), 2000);
        }, 1000)
    }

    let answerState = ""
    if(answer.selected) {
        answerState =  answer.isCorrect ? "correct" : "wrong";
    }


    return (
        <div id="question">
            <QuestionTimer
                onTimeout={()=>onSelectAnswer(null)}
                answer={answer}
            />

            <h2>{QUESTIONS[index].text}</h2>

            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswer={answer.selected}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}