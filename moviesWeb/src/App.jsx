const App = () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
    }

    return (
        <div className="app">
            <h1>Movies Web</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter movie" onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App;