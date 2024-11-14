const CAT_FACT_ENDPOINT = "https://catfact.ninja/fact"

/*export default function getRandomFact() {
    return fetch(CAT_FACT_ENDPOINT)
            .then(res => res.json())
            .then(data => {return data.fact})
    }*/

async function getRandomFact() {
    const response = await fetch(CAT_FACT_ENDPOINT)
    const data = await response.json()
    return data.fact
}

export default getRandomFact