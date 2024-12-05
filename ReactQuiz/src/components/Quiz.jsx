import ProgressBar from "./ProgressBar.jsx";

export default function Quiz() {
    return (
        <div id="quiz">
            <div id='question'>
                <ProgressBar type={'answered'}/>
                <h2></h2>
            </div>
        </div>
    )
}