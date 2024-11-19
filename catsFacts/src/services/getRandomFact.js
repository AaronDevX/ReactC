import {useEffect, useState} from "react";

const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact"

/*export default function getRandomFact() {
    return fetch(CAT_FACT_ENDPOINT)
            .then(res => res.json())
            .then(data => {return data.fact})
    }*/

function randomFact() {
    const [catFact, setCatFact] = useState("")

    async function refreshFact(){
        const response = await fetch(CAT_FACT_ENDPOINT)
        const data = await response.json()
        setCatFact(data.fact)
    }

    useEffect(refreshFact,[])

    return {catFact, refreshFact}
}

export default randomFact