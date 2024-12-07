import {useState, useCallback} from 'react';
import QUESTIONS from '../questions.js';
import Questions from './Questions.jsx'
import Summary from './Summary.jsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizComplete = QUESTIONS.length === activeQuestionIndex

    const handleSelectAnswer = useCallback((userAnswer) => {
        setUserAnswers(prevAnswers => [...prevAnswers, userAnswer]);
    }, [])

    if(quizComplete){
        return (
            <Summary userAnswers={userAnswers}/>
        )
    }

    return (
        <div id="quiz">
            <Questions
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
    )
}