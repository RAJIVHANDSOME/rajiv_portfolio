import './Timeline.css';

const Timeline = () => {
  const education = [
    {
      year: '2021 - 2025',
      degree: 'Bachelor of Technology',
      major: 'Computer Science and Engineering',
      institution: 'Koneru Lakshmaiah Education Foundation',
      description: 'Specialized in Web Development and DS with a CGPA of 9.2'
    },
    {
      year: '2019 - 2021',
      degree: 'Higher Secondary Education',
      institution: 'Narayana Junior College',
      description: 'Completed with 80% in MPC stream'
    },
    {
      year: '2018-19',
      degree: 'Secondary Education',
      institution: 'Dr.KKR’s Gowtham Concept School ',
      description: 'Completed with 8.5 GPA'
    }
  ];

  return (
    <div className="timeline">
      <h2>Education Timeline</h2>
      <div className="timeline-container">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="timeline-year">{edu.year}</div>
              <h3>{edu.degree}</h3>
              <h4>{edu.major}</h4>
              <p className="institution">{edu.institution}</p>
              <p className="description">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;