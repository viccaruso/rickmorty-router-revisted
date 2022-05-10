import { createContext, useContext, useEffect, useState } from 'react';
import { fetchAllCharacters } from '../services/ramAPI';

export const CharactersContext = createContext();

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchAllCharacters().then((results) => setCharacters(results));
  }, []);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
}

export function useCharacters() {
  const context = useContext(CharactersContext);

  if (context === undefined) {
    throw new Error('useCharacters must be used within a CharactersProvider');
  }

  return context;
}
