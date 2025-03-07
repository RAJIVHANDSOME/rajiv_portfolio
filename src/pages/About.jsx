import { FaReact, FaNodeJs, FaDocker, FaGithub, FaLinkedin,FaHtml5,FaCss3,FaJs,FaJava } from 'react-icons/fa';
import { SiKubernetes, SiLeetcode ,SiMysql,SiMongodb,SiSpringboot} from 'react-icons/si';
import SkillIcon from '../components/About/SkillIcon';
import SocialLink from '../components/About/SocialLink';
import Timeline from '../components/About/Timeline';
import './About.css';

const About = () => {
  const skills = [
    { icon: FaHtml5, name: 'Html5',cc:"rgb(255, 112, 112)" },
    { icon: FaCss3, name: 'Css3',cc:"rgb(98, 142, 255)" },
    { icon: FaJs, name: 'JS',cc:"rgb(238, 242, 29)" },
    { icon: FaJava, name: 'Java' ,cc:"rgb(255, 102, 0)"},
    { icon: FaReact, name: 'React' ,cc:"rgb(112, 198, 255)"},
    { icon: FaNodeJs, name: 'Node.js',cc:"rgb(112, 255, 143)" },
    { icon: SiMysql, name: 'Mysql',cc:"rgb(255, 175, 0)" },
    { icon: SiMongodb, name: 'Mongodb' ,cc:"rgb(44, 101, 34)"},
    { icon: SiSpringboot, name: 'Springboot',cc:"rgb(77, 177, 59)" },
   
  ];

  const socialLinks = [
    { icon: FaGithub, name: 'GitHub', url: 'https://github.com/RAJIVHANDSOME' },
    { icon: FaLinkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/kokkiligadda-rajiv-ratna-79b592239/' },
    { icon: SiLeetcode, name: 'LeetCode', url: 'https://leetcode.com/u/2100032455/' },
  ];

  return (
    <div className="about-container">
      <div className="about-grid">
        <div className="timeline-section">
          <Timeline />
        </div>
        
        <div className="skills-social-section">
          <section className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <SkillIcon key={index} {...skill} />
              ))}
            </div>
          </section>

          <section className="social-section">
            <h2>Find Me Online</h2>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;