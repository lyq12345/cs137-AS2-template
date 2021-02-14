import React, {useState} from "react";
import styles from './index.less';
import SearchBar from './components/SearchBar';
import ResultArea from './components/ResultArea';

const Search = () => {
  const [movies, setMovies] = useState([]);

  const handleMovies = (movies) => {
    setMovies(movies);
  }
  return (
  <div className={styles['container']}>
    <div className={styles['search-bar']}>
      <SearchBar handleMovies={handleMovies}/>
    </div>
    <ResultArea movies={movies} />
  </div>);
};

export default Search;
