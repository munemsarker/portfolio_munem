import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Artist & Visualization Expert</h4>
                <h5>
                  <a
                    href="https://www.fiverr.com/munem_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Fiverr | Freelance ↗
                  </a>
                </h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Fiverr Level 2 Seller with a 100% client satisfaction rate.
              Delivering photorealistic commercial product photography, mockups,
              and AI visual assets for global clients while preserving exact
              product geometry, textures, materials, and branding using Google
              Gemini, Google Flow, and Adobe Photoshop.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Media Manager</h4>
                <h5>GenZ Agro | Bangladesh</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Directing digital communication, brand positioning, and visual
              marketing campaigns for an agritech investment platform.
              Contributed to attracting investments exceeding BDT 3 million and
              onboarding repeat investors through high-converting creative
              content.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Brand & Product Designer</h4>
                <h5>Atelier Vedantika</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Managed brand identity, visual presentation, and commercial product
              imagery for a handmade bag brand, establishing a cohesive premium
              aesthetic, design concepts, and marketing visuals.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Computer Science & Eng.</h4>
                <h5>University of Rajshahi</h5>
              </div>
              <h3>2023-</h3>
            </div>
            <p>
              Pursuing B.Sc. in CSE via Imperial College of Engineering,
              Khulna. Coursework and practical research in algorithms, data
              structures, machine learning, data science, database systems, and
              software engineering.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Honors & Certifications</h4>
                <h5>NACTAR, ICPC & ICT Division</h5>
              </div>
              <h3>2021-</h3>
            </div>
            <p>
              20th Position Holder in ICPC Asia Contest (2024); Selected AI
              Trainee (Top 25 out of 3,997 applicants, Youth Development Dept);
              360-Hour ML & Data Science (NACTAR A+ Grade); Special Recognition
              in App & Game Dev from ICT Division.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
