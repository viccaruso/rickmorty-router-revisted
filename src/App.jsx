import { Switch, Route, Redirect } from 'react-router-dom';

export default function App() {
  return (
    <Switch>
      <Route path="/character/:id">
        <h1>/character/:id</h1>
      </Route>
      <Route path="/character">
        <h1>/character</h1>
      </Route>
      <Route path="/">
        <Redirect to="/character" />
      </Route>
    </Switch>
  );
}
