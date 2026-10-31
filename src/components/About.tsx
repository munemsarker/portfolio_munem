import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <div className="about-badge">
          <span className="about-badge-dot"></span>
          <span>Creative Technologist</span>
        </div>
        <h3 className="title">About Me</h3>
        <p className="para">
          I am Munem Sarker, a multidisciplinary creative and technology
          professional specializing in photorealistic AI visual creation,
          commercial product photography, brand design, data science, and
          machine learning. Combining artistic creativity with analytical
          precision, I bridge the gap between human visual storytelling and
          intelligent digital solutions.
        </p>
        <div className="about-pillars">
          <div className="about-pillar-tag">
            <span className="pillar-icon">✦</span> AI Commercial Photography
          </div>
          <div className="about-pillar-tag">
            <span className="pillar-icon">✦</span> Machine Learning & Data Science
          </div>
          <div className="about-pillar-tag">
            <span className="pillar-icon">✦</span> Brand Identity & Design
          </div>
          <div className="about-pillar-tag">
            <span className="pillar-icon">✦</span> Computer Science & Engineering
          </div>
        </div>
        <div className="about-stats-grid">
          <div className="about-stat-card">
            <div className="about-stat-num">Level 2</div>
            <div className="about-stat-label">Fiverr Seller (100% Satisfied)</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-num">3M+ BDT</div>
            <div className="about-stat-label">Investment Impact (GenZ Agro)</div>
          </div>
          <div className="about-stat-card">
            <div className="about-stat-num">B.Sc. CSE</div>
            <div className="about-stat-label">University of Rajshahi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
