import React, { Component } from 'react';
import './App.css';
import Login from './component/login';
import User from './component/user';
import Signup from './component/signup';
import Notfound from './component/notfound';
import { BrowserRouter as Router, Route, Link,  Switch} from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loggedIn : false
    }
  }

  render() {
    return (
      <Router>
      
        
      <div className="App">
        <ul className="nav nav-pills">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>  
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          </ul>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user" component={User} onEnter={this.requireAuth}/>
          <Route path="*" component={Notfound} />
        </Switch>
       
      </div>
      </Router> 
    );
  }
}

export default App;
