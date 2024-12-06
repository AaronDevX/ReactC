import questions from "../assets/questions.js";
import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";
import useVerify from "../hooks/useVerify.js";


export default function Questions({finish}) {
    const {actualQuestion, questionState, answerValid, userAnswers, respondQuestion} = useVerify()

    if(actualQuestion === 6 && questionState === "responded"){
        finish(userAnswers)
    }

    return (
        <div id='question'>
            <ProgressBar
                barStyle={questionState === "responded" ? "answered" : ""}
                initialTime={questionState === "respond" ? 4000 : 1000}
            />
            <h2>{questions[actualQuestion].text}</h2>
            <Answers
                answers={questions[actualQuestion].answers}
                selectedAnswer={respondQuestion}
                questionState={questionState}
                style={answerValid}
            />
        </div>
    )
}