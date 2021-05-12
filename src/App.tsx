import { useState } from 'react';

import { GenreResponseProps, SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setSelectedGenre={ setSelectedGenre } />
      <Content selectedGenre= { selectedGenre } />
    </div>
  );
}