interface HeaderProps {
  genre: {
    title: string
  }
}

export function Header(props: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> { props.genre.title }</span></span>
    </header>
  );
}