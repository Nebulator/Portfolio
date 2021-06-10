import React from 'react';
import { connect } from 'react-redux';
import './section.scss';

const Section = (props) => {
    return (
        <>
            {props.left && props.desktopView &&
                <div className="section-container">
                    <div className="picture-container">
                        <img className="picture" src={props.image} alt="Content"/>
                    </div>
                    <div className="description">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        {props.linkSrc &&
                            <a className="btn-link" href={props.linkSrc} target="_blank" rel="noreferrer">{props.linkText}</a>
                        }
                    </div>
                </div>
            }
            {(!props.left && props.desktopView) &&
                <div className="section-container">
                    <div className="description">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        {props.linkSrc &&
                            <a className="btn-link" href={props.linkSrc} target="_blank" rel="noreferrer">{props.linkText}</a>
                        }
                    </div>
                    <div className="picture-container">
                        <img className="picture" src={props.image} alt="Content"/>
                    </div>
                </div>
            }
            {!props.desktopView &&
                <div className="section-container-mobile">
                    <div className="description description-mobile">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        {props.linkSrc &&
                            <a className="btn-link" href={props.linkSrc} target="_blank" rel="noreferrer">{props.linkText}</a>
                        }
                    </div>
                    <div className="picture-container picture-container-mobile">
                        <img className="picture" src={props.image} alt="Content"/>
                    </div>
                </div>
            }
        </>
    )
}

function mapStateToProps(state) {
    return {desktopView: state.desktop.desktopView}
  };
  
  export default connect(mapStateToProps)(Section);