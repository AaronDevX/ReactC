import {useEffect, useState, useCallback} from "react";

export function useFetchPlaces(functionExc, initialValue) {
    const [loading, setLoading] = useState(null);
    const [placesArr, setPlacesArr] = useState(initialValue);
    const [error, setError] = useState(null);

    const modifyPlaces = useCallback((value)=>{
        setPlacesArr(value);
    }, [])

    useEffect(() => {
        async function fetchUserPlaces() {
            try{
                setLoading(true);
                const places = await functionExc()
                console.log(places);
                setPlacesArr(places);
                setLoading(false);
            }catch(error){
                setError({ message: error.message });
            }
        }
        fetchUserPlaces();
    }, [])

    return {loading, placesArr, error, modifyPlaces};
}