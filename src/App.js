import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Shawshank Redemption",
      priority: true,
    },
    {
      id: 2,
      name: "The Dark Knight",
      priority: true,
    },
    {
      id: 3,
      name: "The Godfather",
      priority: false,
    },
  ]);
  const deleteMovie = id => {
    setMovies(movies.filter(movie => movie.id !== id));
  };
  const togglePriority = id => {
    setMovies(
      movies.map(movie =>
        movie.id === id ? { ...movie, priority: !movie.priority } : movie
      )
    );
  };
  const addMovie = movie => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newMovie = {
      id: id,
      name: movie.movieName,
      priority: false,
    };
    setMovies([...movies, newMovie]);
    console.log(movies);
  };
  return (
    <div>
      <Header
        onAdd={() => setShowAdd(!showAdd)}
        showAdd={showAdd}
        user="Arnob"
      />
      {showAdd && <AddMovie onAdd={addMovie} />}
      {movies.length > 0 ? (
        <List
          onDelete={deleteMovie}
          movies={movies}
          changeToggle={togglePriority}
        />
      ) : (
        <p className="text-white bg-danger rounded-pill m-2 p-2 text-center">
          No movies in watchlist, add some.
        </p>
      )}
      <Footer />
    </div>
  );
}

export default App;
