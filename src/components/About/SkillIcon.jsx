import './SkillIcon.css';

const SkillIcon = ({ icon: Icon, name,cc }) => {
  return (
    <div className="skill-icon">
      <Icon className="icon" style={{color:`${cc}`}}/>
      <span className="skill-name">{name}</span>
    </div>
  );
};

export default SkillIcon;