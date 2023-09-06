import React, { useState, useEffect } from "react";
import Axios from "axios";
import MovieCards from "./MovieCards";
import "./Pagination.css";
const Cards = () => {
  const [moviesDetails, setMoviesDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Initialize with 1 page

  const apikey = "7a1c19ea3c361a4d3cc53eb70ef8298c";

  useEffect(() => {
    getMoviesByPage(currentPage);
  }, [currentPage]);

  const getMoviesByPage = async (page) => {
    try {
      const response = await Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=${page}`
      );
      const { results, total_pages } = response.data;

      setMoviesDetails(results);
      setTotalPages(total_pages);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {moviesDetails.map((moviesDetail, index) => (
              <MovieCards
                title={moviesDetail.title}
                imgSrc={moviesDetail.poster_path}
                id={moviesDetail.id}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
      {/* pagination */}
      <div className="pagination m-5 justify-content-center " >
        <button className="btn btn-danger mx-1"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
           Previous
        </button>
        <span>
           Page {currentPage} of {totalPages} 
        </span>
        <button className="btn btn-danger mx-1"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
           Next
        </button>
      </div>
    </>
  );
};

export default Cards;
