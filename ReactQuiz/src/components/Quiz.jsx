import {useState, useCallback, useRef} from "react";
import QUESTIONS from "../utils/questions.js";
import Summary from "./Summary.jsx";
import QuestionsContainer from "./QuestionsContainer.jsx";

function Quiz(){
    const [userAnswers, setUserAnswers] = useState([])
    const actualAnswer = useRef(0)
    const actualQuestionIndex = userAnswers.length

    const saveUserAnswer = useCallback((answer) => {
        setUserAnswers(prevAnswers => [...prevAnswers, answer])
    }, [])

    const autoSelect = useCallback(() => saveUserAnswer(null), [saveUserAnswer])

    if(actualQuestionIndex === 7){
        return(
            <Summary userAnswers={userAnswers}/>
        )
    }

    const shuffleAnswers = [...QUESTIONS[actualQuestionIndex].answers].sort(() => Math.random() - 0.5);

    return(
        <main id={"quiz"}>
            <QuestionsContainer
                key={actualQuestionIndex}
                shuffleAnswers={shuffleAnswers}
                actualAnswer={actualAnswer}
                questionIndex={actualQuestionIndex}
                saveUserAnswer={saveUserAnswer}
                autoSelect={autoSelect}
            />
        </main>
    )
}

export default Quiz;