import { Switch, Route, Redirect } from 'react-router-dom';
import { CharactersProvider } from './context/CharacterContext';
import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <CharactersProvider>
      <Switch>
        <Route path="/character/:id">
          <h1>/character/:id</h1>
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
