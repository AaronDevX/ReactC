import {useGetCatUrl} from "./hooks/useGetCatUrl.js";
import randomFact from "./services/getRandomFact.js";
const App = () => {
    const { catFact, refreshFact } = randomFact()
    const { catUrl } = useGetCatUrl({catFact})

    function handleClick(){
        refreshFact()
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