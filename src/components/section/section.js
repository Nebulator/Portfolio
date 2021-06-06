import React from 'react';
import { connect } from 'react-redux';
import './section.scss';

class Section extends React.Component {
  render () {
      console.log("Desktop: " + this.props.desktopView);
    return (
        <>
        {console.log("Desktop: " + this.props.desktopView)}
            {this.props.left && this.props.desktopView &&
            <div className="sectionContainer">
                <div className="pictureContainer">
                    <img className="picture" src={this.props.image} alt="Content"/>
                </div>
                <div className="description">
                    <h1>Left</h1>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    {this.props.linkSrc &&
                        <a className="btn-link" href={this.props.linkSrc} target="_blank" rel="noreferrer">{this.props.linkText}</a>
                    }
                </div>
            </div>
            }
            {(!this.props.left || !this.props.desktopView) &&
            <div className="sectionContainer">
                <div className="description">
                    <h1>Different</h1>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    {this.props.linkSrc &&
                        <a className="btn-link" href={this.props.linkSrc} target="_blank" rel="noreferrer">{this.props.linkText}</a>
                    }
                </div>
                <div className="pictureContainer">
                    <img className="picture" src={this.props.image} alt="Content"/>
                </div>
            </div>
            }
        </>
    )
  }
}

const mapStateToProps = state => ({
    desktopView: state.desktop.desktopView
  });
  
  export default connect(mapStateToProps)(Section);