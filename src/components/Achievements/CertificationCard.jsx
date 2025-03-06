import './CertificationCard.css';

const CertificationCard = ({ image, name, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="certification-card">
      <img src={image} alt={name} className="cert-image" />
      <h3 className="cert-name">{name}</h3>
    </a>
  );
};

export default CertificationCard;