import {useState, useEffect} from "react";
import {useGetCatUrl} from "./hooks/useGetCatUrl.js";
import getRandomFact from "./services/getRandomFact.js";

const App = () => {
    const [catFact, setCatFact] = useState("Cat Facts Page")
    const { catUrl } = useGetCatUrl({catFact})

    useEffect(() => {
        getRandomFact().then(fact => setCatFact(fact))
    }, [])

    function handleClick(){
        getRandomFact().then(fact => setCatFact(fact))
    }

    return (
        <>
            <h1>Cats Facts</h1>
            <button onClick={handleClick} >Get new Cat Fact</button>
            {catFact && <p>{catFact}</p>}
            <img src={catUrl} alt="image of cat"/>
        </>
    )
}

export default App;