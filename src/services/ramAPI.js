import fetch from 'cross-fetch';

export const fetchAllCharacters = () => {
  const response = fetch('https://rickandmortyapi.com/api/character');
  const { results } = await response.json();
  return results;
}