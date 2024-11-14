import {useEffect, useState} from "react";

const CAT_IMAGE_ENDPOINT = "https://cataas.com/cat/says/"

const useGetCatUrl = ({catFact}) => {
    const [catUrl, setCatUrl] = useState("")

    useEffect(() => {
        if (!catFact) return

        const threeWords = catFact.split(" ", 5).join("%20");
        fetch(`${CAT_IMAGE_ENDPOINT}${threeWords}`)
            .then(res => setCatUrl(res.url))

    }, [catFact])

    return {catUrl}
}

export {useGetCatUrl};