const API_KEY = "ce693dda";

export default function getMovies({search}) {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        .then((res) => res.json())
        .then((data) => {
            return data['Search'].map(movie => {
                return {
                    title: movie['Title'],
                    year: movie['Year'],
                    image: movie['Poster']
                }
            })
        })
}