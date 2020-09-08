const React = require("react");
const { Link } = require("react-router");
const { connect } = require("react-redux");
const { fetchMoviesActionCreator } = require("../../reducers/movies");
const styles = require("./movies.css");

class Movies extends React.Component {
  componentDidMount() {
    fetch("/src/movies.json", { method: "GET" })
      .then((response) => response.json())
      .then((movies) => {
        this.props.fetchMovies(movies);
      });
  }

  render() {
    const { children, movies = [], params } = this.props;
    return (
      <div className={styles.movies}>
        <div className={params.id ? styles.listHidden : styles.list}>
          {movies.map((movie, index) => (
            <Link key={index} to={`/movies/${index + 1}`}>
              <div
                className={styles.movie}
                style={{ backgroundImage: `url(${movie.cover})` }}
              />
            </Link>
          ))}
        </div>
        {children}
      </div>
    );
  }
}

module.exports = connect(
  ({ movies }) => ({
    movies: movies.movies,
  }),
  {
    fetchMovies: fetchMoviesActionCreator,
  }
)(Movies);
