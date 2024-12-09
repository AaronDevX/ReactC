import {useState} from "react";
import QUESTIONS from "../utils/questions.js";
import ProgressBar from "./ProgressBar.jsx";
import Question from "./Question.jsx";

function QuestionsContainer({actualAnswer ,questionIndex, saveUserAnswer, autoSelect, shuffleAnswers}){
    const [answerState, setAnswerState] = useState({answer: null, isCorrect: null})
    const actualQuestion = QUESTIONS[questionIndex];
    let status = "";

    function handleSelectAnswer(answer){
        if(actualAnswer.current === questionIndex+1) return
        actualAnswer.current = actualAnswer.current + 1;

        setAnswerState({answer: answer, isCorrect: null});

        setTimeout(() => {
            if(answer === actualQuestion.answers[0]){
                setAnswerState({answer: answer, isCorrect: true})
            }else{
                setAnswerState({answer: answer, isCorrect: false})
            }

            setTimeout(() => {
                saveUserAnswer(answer);
            }, 2000)
        }, 1500)
    }

    if(answerState.answer !== null && answerState.isCorrect === null){
        status = "pending";
    }else if(answerState.isCorrect === true){
        status = "correct";
    }else if(answerState.isCorrect === false){
        status = "wrong";
    }

    return(
        <div id={"question"}>
            <ProgressBar
                status={status}
                answerState={answerState}
                autoSelect={autoSelect}
            />
            <Question
                shuffleAnswers={shuffleAnswers}
                status={status}
                answerSelected={answerState.answer}
                title={actualQuestion.text}
                onRespond={handleSelectAnswer}
            />
        </div>
    )
}

export default QuestionsContainer;