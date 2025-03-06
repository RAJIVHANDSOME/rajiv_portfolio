import './SkillIcon.css';

const SkillIcon = ({ icon: Icon, name }) => {
  return (
    <div className="skill-icon">
      <Icon className="icon" />
      <span className="skill-name">{name}</span>
    </div>
  );
};

export default SkillIcon;