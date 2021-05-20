import {useState} from 'react';
import { getByTitle } from '@testing-library/dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Settings from './pages/Settings.js';

function App() {
  let [title, changeTitle] = useState('김민호 님의 미니홈피');

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home title={title}/>
      </Route>

      <Route exact path="/profile">
        <Profile title={title}/>
      </Route>

      <Route exact path="/settings">
        <Settings title={title} changeTitle={changeTitle}/>
      </Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;