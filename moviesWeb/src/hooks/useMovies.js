import {useEffect, useRef, useState} from "react";
import getMovies from "../services/getMovies.js";

export default function useMovies() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorReq, setErrorReq] = useState(null);
    const previousSearch = useRef('');

    const requestApi = async () => {
        if(search === "") return;
        if(search === previousSearch.current) return;

        setLoading(true);
        setErrorReq(null);
        previousSearch.current = search;
        try{
            const movies = await getMovies({search});
            setMovies(movies);
        }catch(error){
            setErrorReq(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        requestApi();
    }, [search]);

    return {setSearch, movies, loading, errorReq}
}