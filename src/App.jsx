import { Switch, Route, Redirect } from 'react-router-dom';
import { CharactersProvider } from './context/CharacterContext';
import CharacterDetail from './views/CharacterDetail';
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <CharactersProvider>
      <Switch>
        <Route path="/character/:id">
          <CharacterDetail />
        </Route>
        <Route path="/character">
          <CharacterList />
        </Route>
        <Route path="/">
          <Redirect to="/character" />
        </Route>
      </Switch>
    </CharactersProvider>
  );
}
