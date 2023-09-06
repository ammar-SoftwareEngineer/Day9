// FavoritesPage.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "./MovieCards";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { removeFromFavorites, clear } from "./rtk/MyFav/favoritesSlice";
import "./MovieCards.css";
import "./Pagination.css";
function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const itemsPerPage = 8; // Number of movies to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(favorites.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;

  const displayedMovies = favorites.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleRemoveFromFavorites = (id) => {
    // Dispatch the action to remove the movie by id
    dispatch(removeFromFavorites(id));
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">My Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div>
          {/* Clear Button */}
          <Button className="btn btn-primary remove-favorite"  onClick={() => dispatch(clear())}>
            Clear All
          </Button>
          <br /> <br />
          <Row>
            {displayedMovies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="mb-3">
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${movie.imgSrc}`}
                  />
                  <Card.Body>
                    <Card.Title className="text-center">
                      <h6>{movie.title}</h6>
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      
                      className="w-100 btn btn-primary remove-favorite"
                      onClick={() => handleRemoveFromFavorites(movie.id)}
                    >
                      Remove from Favorites
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          {/* pagination */}
          <div className="pagination-container">
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      )}
    </Container>
  );
}

export default FavoritesPage;
