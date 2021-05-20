import {useState} from 'react';
import { getByTitle } from '@testing-library/dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Settings from './pages/Settings.js';
import Mytech from './pages/Mytech.js';
import Aboutme from './pages/Aboutme.js';
import Adanswer from './pages/Adanswer.js';

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
        <Settings title={title}/>
      </Route>

      <Route exact path="/profile/aboutme">
        <Aboutme title={title}/>
      </Route>

      <Route exact path="/profile/mytech">
        <Mytech title={title}/>
      </Route>

      <Route exact path="/profile/adanswer">
        <Adanswer title={title}/>
      </Route>


    </Switch>
    </BrowserRouter>
    
  );
}

export default App;