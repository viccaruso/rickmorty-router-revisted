import { useParams, Link } from 'react-router-dom';
import { useCharacters } from '../context/CharacterContext';

export default function CharacterDetail() {
  const { id } = useParams();
  const { characters } = useCharacters();

  if (!characters.length) {
    return <h1>Please wait while we fetch the characters's details...</h1>;
  } else if (id > characters.length) {
    return <p>Invalid character ID - Maximum ID: {characters.length}</p>;
  } else {
    return (
      <div>
        <h1>{characters[id - 1].name}</h1>
        <img
          src={characters[id - 1].image}
          alt={`Image of Rick and Morty character ${characters[id - 1].name}`}
        />
        <p>Status: {characters[id - 1].status}</p>
        <Link to="/">Back to main page</Link>
      </div>
    );
  }
}
