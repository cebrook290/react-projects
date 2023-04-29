import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import backgroundImage from './pattern.png'
import Dashboard from './Components/Dashboard';
import Pokemon from './Components/Pokemon';
import SearchBar from './Components/Searchbar';



export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <Navbar /><SearchBar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
