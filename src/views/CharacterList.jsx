import { useCharacters } from '../context/CharacterContext';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  const { characters } = useCharacters();

  console.log(characters[2]);
  return (
    <div>
      <h1>Rick & Morty Characters</h1>
      {characters.map((character, index) => {
        return (
          <div key={index}>
            <h3>{character.name}</h3>
            <Link to={`/character/${character.id}`}>
              <img src={character.image} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}