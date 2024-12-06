import {useState} from "react";
import Start from "./Start.jsx";
import Questions from "./Questions";
import Results from "./Results";

export default function Quiz() {
    const [appState, setAppState] = useState({state: "pending", results: []});

    function handleStart() {
        setAppState({state: "start", results: []});
    }
    function handleFinish(userAnswers) {
        setAppState({state: "finish", results: userAnswers});
    }
    function handleRestart() {
        setAppState({state: "pending", results: []});
    }

    return (
        <div id="quiz">
            {appState.state === "pending" && <Start start={handleStart} />}
            {appState.state === "start" && <Questions finish={handleFinish} />}
            {appState.state === "finish" && <Results results={appState.results} restart={handleRestart} />}
        </div>
    )
}