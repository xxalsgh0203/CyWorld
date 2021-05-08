import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Settings from './pages/Settings.js';

function App() {
  return (

    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route exact path="/settings">
        <Settings />
      </Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
