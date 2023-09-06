import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const MovieDetail = () => {
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`
      )
      .then(({ data }) => {
        setMovieDetails(data);
      })
      .catch();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img 
              src={"https://image.tmdb.org/t/p/w500" + movieDetails.poster_path}
              className="w-100 "
            />
          </div>
          <div className="col-md-8">
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.overview}</p>
            <p>
              <span className="fw-bold">ReleaseDate : </span>
              {movieDetails.release_date}
            </p>
            <p>
              <span className="fw-bold">popularity : </span>
              {movieDetails.popularity}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
