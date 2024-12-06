import {useCallback, useEffect, useState, useRef} from "react";
import valid from "../assets/valid.js";

export default function useVerify() {
    const [actualQuestion, setActualQuestion] = useState(0);
    const [questionState, setQuestionState] = useState("respond")
    const [answerValid, setAnswerValid] = useState(false)
    const userAnswers = useRef([])

    const respondQuestion = useCallback((selectedAnswer = "")=>{
        if(userAnswers.current[actualQuestion]) return

        setQuestionState("responded")

        userAnswers.current = [...userAnswers.current, selectedAnswer];

        if(selectedAnswer === ""){
            setAnswerValid(false);
            return;
        }

        if (selectedAnswer === valid[actualQuestion]) {
            setAnswerValid(true);
        }else{
            setAnswerValid(false);
        }
    },[actualQuestion])

    useEffect(()=>{
        if(actualQuestion === 6 && questionState === "responded") return;

        let timer

        if(questionState === "responded"){
            timer = setTimeout(()=>{
                setQuestionState("validate")
            }, 1000)
        }else if(questionState === "validate"){
            timer = setTimeout(()=>{
                setActualQuestion(prevQuestion => prevQuestion + 1)
                setQuestionState("respond")
            }, 1000)
        }else{
            timer = setTimeout(()=>{
                respondQuestion()
            }, 4000)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [questionState])

    return {actualQuestion, questionState, answerValid, userAnswers: userAnswers.current, respondQuestion}
}