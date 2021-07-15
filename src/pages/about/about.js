import {Sections} from "./about-sections"
import Section from '../../components/section/section'
import './about.scss';

function About() {
  let leftToggle = false;
  return (
    <>
      <h1>About Me</h1>
      <div className="About">
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

export default About;