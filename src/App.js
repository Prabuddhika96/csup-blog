import MainPage from './Components/MainPage';
import NavBar from './Components/NavBar';
import NewBlogPost from './Components/NewBlogPost';
import './CSS/style.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Content from './Components/Content';
import React from 'react';

const name='abc hhh';

export const User=React.createContext(name);

function App() {
  return (
    <Router>
      <User.Provider value={name}>
        <NavBar/> 
        <Switch>

          <Route exact path='/'>
            <MainPage/>
          </Route>

          <Route path='/create'>
            <NewBlogPost/>
          </Route>

          <Route path='/posts/:id'>
            <Content/>
          </Route>

        </Switch>
      </User.Provider>
    </Router>
  );
}

export default App;
