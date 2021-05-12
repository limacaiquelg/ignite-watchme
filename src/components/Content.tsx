import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { MovieCard } from '../components/MovieCard';

import { api } from '../services/api';

import '../styles/content.scss';

interface ContentProps {
  selectedGenre: {
    id: number,
    title: string
  }
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content(props: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${props.selectedGenre.id}`).then(response => {
      setMovies(response.data);
    });
  }, [props.selectedGenre.id]);
  
  return (
    <div className="container">
      <Header genre={ props.selectedGenre }/>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={ movie.imdbID } title={ movie.Title } poster={ movie.Poster } runtime={ movie.Runtime } rating={ movie.Ratings[0].Value } />
          ))}
        </div>
      </main>
    </div>
  );
}