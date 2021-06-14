import Section from '../../components/section/section'
import Profile from "../../assets/images/Professional Profile Flipped.jpg";
import './about.scss';

function About() {
  return (
    <>
      <h1>About Me</h1>
      <div className="About">
        <Section image={Profile} title={"About Me"}description={"Hey there! I'm Nathaniel Cook. I studied at Utah Valley University and earned two bachelor's degrees: one in Computer Science and one in Computer Engineering. I've worked as a grader for classes in C# and computer algorithms. I have also had two internships with the Church of Jesus Christ of Latter-Day Saints: one as a QA and one as a Software Engineer. I've come to love computers and their endless potential. The idea that we can create something fantastic and reproduce it with very low cost is astounding. I've also come to realize that video games are a powerful form of media, more so in my mind than most others because the player heavily interacts in the game as opposed to passively receiving it through reading or a movie. I believe a lot of good can be done beyond entertainment through this medium and I hope to do so throughout my career."}/>
      </div>
    </>
  );
}

export default About;