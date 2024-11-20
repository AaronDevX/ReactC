const API_KEY = "ce693dda";

export default async function getMovies({search}) {
    if (search === '') return

    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await response.json();

    return data['Search'].map(movie => {
        return {
            title: movie['Title'],
            year: movie['Year'],
            image: movie['Poster']
        }
    })
}