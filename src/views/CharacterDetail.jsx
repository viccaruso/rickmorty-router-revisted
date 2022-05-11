import { useParams } from 'react-router-dom';
import { useCharacters } from '../context/CharacterContext';

export default function CharacterDetail() {
  const { id } = useParams();
  const { characters } = useCharacters();

  if (!characters.length) {
    return <p>Loading</p>;
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

        {console.log(characters[id - 1])}
      </div>
    );
  }
}
