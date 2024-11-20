import useValidate from "./hooks/useValidate";
import Movies from "./components/Movies";
import useMovies from "./hooks/useMovies.js";

const App = () => {
    const {query, setQuery, error} = useValidate();
    const {setSearch, movies, loading, errorReq } = useMovies({query});

    function handleSubmit(e) {
        e.preventDefault();
        setSearch(query)
    }

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <div className="app">
            <h1>Movies Web</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Enter movie" onChange={handleChange} value={query}/>
                <button type="submit">Submit</button>
            </form>
            {error && <p className="error">{error}</p>}
            {movies.length>0 ? <Movies movies={movies}/> : null}
        </div>
    )
}

export default App;