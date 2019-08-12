import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
// put line above in
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = props => {
  console.log(props)
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get("http://localhost:5000/api/movies")
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <MovieCard key={movie.id} movie={movie} />
          {/* put Link in changed MovieDetails to MovieCard */}
        </Link>
      ))}
    </div>
  );
};

// moved this component to MovieCard.js
// function MovieDetails({ movie }) {
//   const { title, director, metascore, stars } = movie;
//   return (
//     <Link to={`/movies/${movie.id}`}>
//       <div className="movie-card">
//         <h2>{title}</h2>
//         <div className="movie-director">
//           Director: <em>{director}</em>
//         </div>
//         <div className="movie-metascore">
//           Metascore: <strong>{metascore}</strong>
//         </div>
//         <h3>Actors</h3>

//         {stars.map(star => (
//           <div key={star} className="movie-star">
//             {star}
//           </div>
//         ))}
//       </div>
//     </Link>
//   );
// }

export default MovieList;
