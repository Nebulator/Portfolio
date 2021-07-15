import React from 'react';
import Section from '../../components/section/section';
import {Sections} from "./portfolio-sections";
import './portfolio.scss';
const Portfolio = () => {
    let leftToggle = false;
    return (
        <>
            <h1>Portfolio</h1>
            <div className="Portfolio">
                {
                Sections.map((section) => (
                    leftToggle = !leftToggle,
                    <Section
                        title={section.title}
                        date={section.date}
                        description={section.description}
                        image={section.image}
                        linkSrc={section.linkSrc}
                        linkText={section.linkText}
                        left={leftToggle}
                        />
                ))}
            </div>
        </>
    );
}
export default Portfolio;