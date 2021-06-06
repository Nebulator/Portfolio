//import logo from './logo.svg';
import NavBar from './components/navbar/navbar'
import Portfolio from './pages/portfolio/portfolio'
//import About from './pages/about/about'
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import React from 'react';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Portfolio/>
      </div>
    );
  }
}
export default App;