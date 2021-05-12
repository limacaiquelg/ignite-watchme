import { useState, useEffect } from 'react';

import { GenreResponseProps } from '../App';
import { Button } from '../components/Button';

import { api } from '../services/api';

import '../styles/sidebar.scss';

interface SideBarProps {
  setSelectedGenre: (responseData: GenreResponseProps) => void
}

export function SideBar(props: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      props.setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={ String(genre.id) }
            title={ genre.title }
            iconName={ genre.name }
            onClick={ () => handleClickButton(genre.id) }
            selected={ selectedGenreId === genre.id } 
          />
        ))}
      </div>
    </nav>
  );
}