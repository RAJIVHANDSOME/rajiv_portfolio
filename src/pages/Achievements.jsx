import CertificationCard from '../components/Achievements/CertificationCard';
import './Achievements.css';
import rpa from '../assets/rpa.jpg';
import salesfai from '../assets/salesfai.jpg';
const Achievements = () => {
  const certifications = [
    {
      image: 'https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      name: 'AWS Certified Cloud Practitioner ',
      url: 'https://www.credly.com/badges/6234e46e-837f-45d2-ac69-cce587779def/public_url',
    },
    {
      image: 'https://images.credly.com/size/680x680/images/ae7dd2bd-1d04-43d9-b148-1ef79ec45129/image.png',
      name: 'Red Hat Certified Enterprise Application Developer',
      url: 'https://www.credly.com/badges/35695135-a15b-44b7-ae91-6ae03915df34/public_url',
    },
    {
      image: rpa,
      name: 'RPA Professional (Automation 360)',
      url: '#',
    },
    {
      image: "https://assets.leetcode.com/static_assets/marketing/lg365.png",
      name:"Leetcode365",
      url: 'https://leetcode.com/u/2100032455/',
    },
    {
      image: "https://assets.leetcode.com/static_assets/marketing/2024-lg.png",
      name: "Leetcode2024",
      url: 'https://leetcode.com/u/2100032455/',
    },
    {
      image: "https://images.credly.com/size/680x680/images/87eec792-3c63-4526-aafb-da866a30fa54/image.png",
      name: "Multicloud Network Associate",
      url: 'https://www.credly.com/badges/3c39bcd7-1a1c-4868-b9b0-f3faf68d2655/public_url',
    },
    // Add more certifications as needed
  ];

  return (
    <div className="achievements-container">
      <section className="certifications-section">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </section>

      <section className="publication-section">
        <h2>Publications</h2>
        <div className="publication-card">
          <h3>Comparative Analysis of Sentiment Analysis 
Models on Twitter Data: Insights from the Russian
Ukrainian War</h3>
          <p>Published in International Journal of Computer Science</p>
          <p className="publication-description">
          Sentiment analysis is a machine learning and 
Natural Language Processing (NLP) technique that involves 
categorizing a text's emotional tone into positive, negative, and 
neutral feelings. This research employs diverse models, 
Roberta-an enhanced BERT Model that can capture contextual 
relationships within the data...
          </p>
          <a href="#" className="publication-link">Read Publication</a>
        </div>
      </section>
    </div>
  );
};

export default Achievements;