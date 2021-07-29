import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About'
import NavBar from './Components/NavBar/NavBar';
import FullTodoList from './TodoListComponents/App'
import FullUserList from './UserListComponents/UserList'
import './App.css'
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className = "main">
      <Router> 
        <NavBar />
        <Switch> 
          <Route exact path = "/">
            <Home /> 
          </Route>

          <Route exact path = "/Todo-List"> 
            <FullTodoList/>
          </Route>

          <Route exact path = "/User-List">
            <FullUserList />
          </Route>

          <Route exact path = "/contact">
            <Contact />
          </Route>

          <Route exact path = "/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
