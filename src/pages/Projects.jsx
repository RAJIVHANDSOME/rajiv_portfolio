import ProjectCard from '../components/Projects/ProjectCard';
import './Projects.css';
// import jewelmatch from './jewelmatch.gif';
// import agro from './agriinsght.gif';
const Projects = () => {
  const projects = [
    {
      id:0,
      image: './jewelmatch.gif',
      name: 'AgriInsight',
      description: 'Soil Report & Farming Data Management System that allows volunteers to collect data, experts to analyze soil reports, and admins to manage user access. It includes real-time data visualization, role-based access, and automatic translation based on location.',
      tags: ['ReactJS', 'NodeJS', 'MongoDB','Css'],
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      id:1,
      image: "{agro}",
      name: 'JewelMatch',
      description: 'Developed a jewellery searching app using Google Teachable Machine, allowing users to upload images and find similar products. The app leverages machine learning to recognize patterns and suggest matching jewellery items efficiently',
      tags: ['ReactJS', 'NodeJS', 'MongoDB','Css','GTM'],
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      id:2,
      image: 'https://saibhagavan.netlify.app/img/ezgif.com-animated-gif-maker.gif',
      name: 'DealsBlendr',
      description: 'This DealsBlendr application is built using ReactJs and Spring framework. It is useful for users who are searching for better prices of electronic devices.',
      tags: ["Java","SpringBoot","Hibernate","ReactJS","MongoDB"],
      githubUrl: 'https://github.com/yourusername/project3',
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;