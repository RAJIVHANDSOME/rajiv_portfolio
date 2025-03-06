import ProjectCard from '../components/Projects/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59zt3iLQrjDbIm0sqrrJB_OtqlIvkhA_ZAw&s',
      name: 'Travel Tourism and Hospitality',
      description: 'Developed a user-friendly travel and tourism system that streamlined booking management. Designed and implemented a robust backend using Spring Boot, ensuring seamless integration with MySQL for efficient data storage and retrieval.',
      tags: ['Spring Boot', 'MySQL', 'Html','Css'],
      githubUrl: 'https://github.com/yourusername/project1',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59zt3iLQrjDbIm0sqrrJB_OtqlIvkhA_ZAw&s',
      name: 'Health and Life Insurance Management System',
      description: 'Developed a comprehensive Health and Life Insurance Management System using Django for the full stack and MongoDB for efficient data handling.Streamlined the management of insurance policies, client information, and claims processing.',
      tags: ['Django', 'MongoDB', 'Html','Css'],
      githubUrl: 'https://github.com/yourusername/project2',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59zt3iLQrjDbIm0sqrrJB_OtqlIvkhA_ZAw&s',
      name: 'Task Management System',
      description: 'A collaborative task management system with real-time updates. Features include task creation, assignment, progress tracking, and team collaboration tools. Implemented drag-and-drop functionality and email notifications for task updates.',
      tags: ['React', 'Firebase', 'Material-UI', 'Node.js', 'SendGrid'],
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