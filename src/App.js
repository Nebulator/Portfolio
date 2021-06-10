//import logo from './logo.svg';
import NavBar from './components/navbar/navbar'
import Portfolio from './pages/portfolio/portfolio'
import About from './pages/about/about'
import Contact from './pages/contact/contact'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import { setDesktop } from './redux/desktop/desktop.action';
import { connect } from 'react-redux';

class App extends React.Component{
  constructor (props) {
    super(props)
    
    this.WindowResize = this.WindowResize.bind(this)
  }

  WindowResize() {
    if (window.innerWidth > 860)
    {
      this.props.setDesktop(true);
    }
    else
    {
      this.props.setDesktop(false);
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.WindowResize);
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <div className="page-container">
          <Switch>
            <Route exact path='/AboutMe' component={About} />
            <Route exact path='/Portfolio' component={Portfolio} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}
//export default App;

const mapDispatchToProps = dispatch => ({
  setDesktop: desktop => dispatch(setDesktop(desktop)),
});

export default connect(null, mapDispatchToProps)(App);