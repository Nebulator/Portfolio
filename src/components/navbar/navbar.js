import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setDesktop } from '../../redux/desktop/desktop.action'
import './navbar.scss';

class NavBar extends React.Component { 
  render () {
    var desktopView = window.matchMedia("(max-width: 860px)")
    setDesktop(desktopView.matches);
    return (
      <>
        <div className="bar">
              <Link className="nav-link" to='/Portfolio'>Portfolio</Link>
              <a className="nav-link" href="https://drive.google.com/file/d/1xg3e2NNuz7pkAuO_TxFUBnE3dyJ3X-II/view?usp=sharing">Resume</a>
              <Link className="nav-link" to='/AboutMe'>About Me</Link>
              <Link className="nav-link" to='/Contact'>Contact</Link>
        </div>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setDesktop: desktop => dispatch(setDesktop(desktop))
});

export default connect(null, mapDispatchToProps)(NavBar);