export default function Movies({movies, error}) {
    return (
        <div className="movies">
            {error ?
                <p>{error}</p> :
                movies.map((movie, index) => (
                        <div className="movie" key={index}>
                            <h3>{movie.title}</h3>
                            <p>{movie.year}</p>
                            <img src={movie.image} alt={movie.title} />
                        </div>
                    ))}
        </div>
    )
}