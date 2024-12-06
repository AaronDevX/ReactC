export default function Results({results, restart}) {
    console.log(results);
    return (
        <div className="results">
            <button onClick={()=>restart()}>Restart</button>
            <p>{results.length}</p>
        </div>
    )
}