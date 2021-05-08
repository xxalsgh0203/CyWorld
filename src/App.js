import Layout from './components/Layout.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';

function App() {
  return (
    // <BrowserRouter>
    // <Switch>
    //   <Route exact path="/">
    //     <Home />
    //   </Route>
    //   <Route exact path="/profile">
    //     <Profile />
    //   </Route>
    // </Switch>
    // </BrowserRouter>
    <div><Layout /></div>
  );
}

export default App;
