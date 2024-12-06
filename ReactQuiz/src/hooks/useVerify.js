import {useCallback, useEffect, useState, useRef} from "react";
import valid from "../assets/valid.js";

export default function useVerify() {
    const [actualQuestion, setActualQuestion] = useState(0);
    const [questionState, setQuestionState] = useState("respond")
    const [answerValid, setAnswerValid] = useState({type: false, index: -1})
    const userAnswers = useRef([])

    const respondQuestion = useCallback((selectedAnswer = "", index = -1)=>{
        if(userAnswers.current[actualQuestion]) return

        setQuestionState("responded")

        userAnswers.current = [...userAnswers.current, selectedAnswer];

        if(selectedAnswer === ""){
            setAnswerValid({type: false, index: -1});
            return;
        }

        if (selectedAnswer === valid[actualQuestion]) {
            setAnswerValid({type: true, index: index});
        }else{
            setAnswerValid({type: false, index: index});
        }
    },[actualQuestion])

    useEffect(()=>{
        if(actualQuestion === 7 && questionState === "respond") return;

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