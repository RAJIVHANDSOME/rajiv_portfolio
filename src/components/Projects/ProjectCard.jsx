import './ProjectCard.css';
// import p1 from '../../assets/jewelmatch.gif'
import jewelmatch from './jewelmatch.gif';
import agro from './agriinsght.gif';
const arr=[agro,jewelmatch,"https://saibhagavan.netlify.app/img/ezgif.com-animated-gif-maker.gif"];
const ProjectCard = ({ id,image, name, description, tags, githubUrl }) => {
  return (
    <div className="project-card">
    
      <img src={arr[id]} alt={name} className="project-image" />)
    
      <div className="project-content">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;