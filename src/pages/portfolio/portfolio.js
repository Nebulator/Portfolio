import Section from '../../components/section/section'
import Profile from "../../assets/images/Profile Picture.jpg";
import GlitchGarden from "../../assets/images/Glitch Garden.png";
import Camera from "../../assets/images/Camera Render.png";
import Compiler from "../../assets/images/Compiler.png";
import './portfolio.scss';

function Portfolio() {
  return (
    <div className="Portfolio">
      <Section image={Profile} title={"BYU-Pathway Portal"}description={"While working for The Church of Jesus Christ, I helped maintain and build up the BYU Pathway Portal and Online Degree Portal. These applications used .net5 and api calls to send and receive information from our database. I developed modules such as the certificate and courses modules. I worked closely with the designers, standardized some styles across the two apps and made the UI cleaner, especially on the mobile view."}/>
      <Section image={Compiler} linkSrc="https://drive.google.com/file/d/1Btyx91SuxvHvLmH4xAha3hXp7d7AFgQQ/view?usp=sharing" linkText="Download" title={"Compiler"} description={"For my capstone project at Utah Valley University, I built a virtual machine and assembler in C++ and a matching compiler in C#. It was designed to read a language our professor, Dr. Curtis Wellborn, had created called kxi2020. It can use objects, functions and arrays. While this was one of the most stressful projects I've worked on, it has also been one of my favorites. I am unable to upload the code for these due to the possibility of future students using it, but feel free to download the executable and some sample programs."} left/>
      <Section image={GlitchGarden} linkText="Go to Games" linkSrc="https://sharemygame.com/@Nebulator" title={"Games Developed"} description={"I've come to realize that games are a powerful form of media because of the high amount of interaction. As a result, over the last decade I've become very interested in game development. During the covid-19 pandemic in summer 2020, I dedicated my time to taking classes and developing games. Some of my games are based on the classes I took, some took inspiriation from games I've played. I plan to continue developing games in the future."} />
      <Section image={Camera} title={"3D Modeling"} description={"I like to have a wide spectrum of knowledge when it comes to computer related topics. As a result, I dipped my toes into some 3D modeling. In an intro to modeling course, I modeled a watch, and then modeled and textured a camera. I have also modeled and 3D printed some hardware for various projects."} left/>
    </div>
  );
}

export default Portfolio;