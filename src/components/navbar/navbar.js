import React from 'react';
import { connect } from 'react-redux';
import { setDesktop } from '../../redux/desktop/desktop.action'
import './navbar.scss';

class NavBar extends React.Component { 
  render () {
    var desktopView = window.matchMedia("(max-width: 860px)")
    setDesktop(desktopView.matches);
    console.log("Desktop View: " + desktopView.matches);
    return (
      <>
        <div className="bar">
              <a className="nav-link" href="https://www.google.com">Portfolio</a>
              <a className="nav-link" href="https://drive.google.com/file/d/1xg3e2NNuz7pkAuO_TxFUBnE3dyJ3X-II/view?usp=sharing">Resume</a>
              <a className="nav-link" href="https://www.google.com">About Me</a>
              <a className="nav-link" href="https://www.google.com">Contact</a>
        </div>
        <div className="spacer"/>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setDesktop: desktop => dispatch(setDesktop(desktop))
});

export default connect(null, mapDispatchToProps)(NavBar);