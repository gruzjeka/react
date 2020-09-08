const FETCH_MOVIES = "movies/FETCH_MOVIES";
const FETCH_MOVIE = "movie/FETCH_MOVIE";

const initialState = {
  movies: [],
  movie: { starring: [] },
};

module.exports = {
  reducer: (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MOVIES:
        return Object.assign({}, state, { movies: action.movies });
      case FETCH_MOVIE:
        return Object.assign({}, state, {
          movie: state.movies[action.index - 1],
        });
      default:
        return state;
    }
  },
  fetchMoviesActionCreator: (movies) => ({
    type: FETCH_MOVIES,
    movies: movies,
  }),
  fetchMovieActionCreator: (index) => ({
    type: FETCH_MOVIE,
    index: index,
  }),
};
