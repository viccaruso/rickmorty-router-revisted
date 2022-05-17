import { useCharacters } from '../context/CharacterContext';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const { characters } = useCharacters();
  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      {characters.map((character, index) => {
        return (
          <div key={index}>
            <h3>{character.name}</h3>
            <Link to={`/character/${character.id}`}>
              <img
                src={character.image}
                alt={`Image of Rick and Morty character ${character.name}`}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
