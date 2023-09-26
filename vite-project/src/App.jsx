import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profile';
import LoginForm from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <NavBar />
      
        <Route path="/" exact component={Home} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={Register} />
        {/* Add more routes for other components */}
      
    </Router>
  );
}

export default App;
