import React, { Component } from "react";
import { getMovies } from "../Services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies()
  };
  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  render() {
    if (this.state.movies.length === 0) return <h1>Non films existe</h1>;
    return (
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Genre</td>
            <td>Stock</td>
            <td>Rate</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {this.state.movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => this.deleteMovie(movie)}
                  className="btn btn-danger btn-sm"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Movies;
