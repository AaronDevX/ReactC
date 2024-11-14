import {useState, useEffect} from "react";

const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact"

const CAT_IMAGE_ENDPOINT = "https://cataas.com/cat/says/"

const IMAGE_URL_SHOT = "https://cataas.com/cat/"

const App = () => {
    const [catFact, setCatFact] = useState("Cat Facts Page")
    const [catImageUrl, setCatImageUrl] = useState("")

    function handleClick(){
        fetch(CAT_FACT_ENDPOINT)
            .then(res => res.json())
            .then(data => setCatFact(data.fact))
    }

    useEffect(()=>{
        const threeWords = catFact.split(" ", 3).join("%20")

        fetch(`${CAT_IMAGE_ENDPOINT}${threeWords}`)
            .then(res => setCatImageUrl(res.url))
    }, [catFact])

    return (
        <>
            <h1>Cats Facts</h1>
            <button onClick={handleClick} >Get new Cat Fact</button>
            {catFact && <p>{catFact}</p>}
            <img src={catImageUrl} alt="image of cat"/>
        </>
    )
}

export default App;