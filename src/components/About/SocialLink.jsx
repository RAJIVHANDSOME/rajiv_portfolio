import './SocialLink.css';

const SocialLink = ({ icon: Icon, name, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-link">
      <Icon className="social-icon" />
      <span>{name}</span>
    </a>
  );
};

export default SocialLink;