import { useState, useEffect, useRef } from "react";

export default function useValidate(){
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);
    const firstRender = useRef(true);

    useEffect(() => {
        if(firstRender.current){
            firstRender.current = query==='';
            return;
        }

        if(query === ""){
            setError("Please type something");
            return;
        }
        if(query.length <= 3){
            setError("Please enter more than 3 characters");
            return;
        }
        if(query.match(/^\d+$/)){
            setError("Please dont type only numbers");
            return;
        }
        setError(null)

    }, [query]);

    return {query, setQuery, error};
}