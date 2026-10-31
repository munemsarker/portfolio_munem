import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h3>
            Let's <span>Connect</span>
          </h3>
          <p>Open for creative visual direction, AI projects, and freelance collaborations</p>
        </div>

        <div className="contact-grid">
          {/* Card 1: Direct Contact */}
          <div className="contact-card">
            <div>
              <div className="contact-card-title">Direct Inquiries</div>
              <div className="contact-item">
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">
                  <a href="mailto:munem@engineer.com" data-cursor="disable">
                    munem@engineer.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-label">Phone / WhatsApp</div>
                <div className="contact-item-val">
                  <a href="tel:+8801878220882" data-cursor="disable">
                    +8801878-220882
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-label">Location</div>
                <div className="contact-item-val" style={{ color: "#b5b5b5", fontSize: "15px" }}>
                  Boikali, Khulna, Bangladesh
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Professional Platforms */}
          <div className="contact-card">
            <div>
              <div className="contact-card-title">Profiles & Social</div>
              <div className="contact-links-list">
                <a
                  href="https://github.com/munemsarker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-pill"
                  data-cursor="disable"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FaGithub /> GitHub
                  </span>
                  <MdArrowOutward />
                </a>

                <a
                  href="https://www.fiverr.com/munem_ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-pill"
                  data-cursor="disable"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <SiFiverr /> Fiverr (Level 2 Seller)
                  </span>
                  <MdArrowOutward />
                </a>

                <a
                  href="https://bd.linkedin.com/in/munemsarker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-pill"
                  data-cursor="disable"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FaLinkedinIn /> LinkedIn
                  </span>
                  <MdArrowOutward />
                </a>

                <a
                  href="https://x.com/munem_sarker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-pill"
                  data-cursor="disable"
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FaXTwitter /> X (Twitter)
                  </span>
                  <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Status & Collaboration */}
          <div className="contact-card">
            <div>
              <div className="contact-card-title">Status & Availability</div>
              <div className="contact-status-box">
                <div className="status-dot"></div>
                <div className="status-text">Available for Projects & Contracts</div>
              </div>

              <p style={{ fontSize: "14px", color: "#a5a5a5", lineHeight: "1.6", margin: "0 0 20px 0" }}>
                Specialized in commercial AI product photography, visual brand identity, and machine learning solutions. Delivering international quality with 100% satisfaction.
              </p>
            </div>

            <div style={{ paddingTop: "15px", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
              <div style={{ fontSize: "16px", fontWeight: "600", color: "#ffffff" }}>
                Munem Sarker
              </div>
              <div style={{ fontSize: "12px", color: "var(--accentColor)", marginTop: "2px" }}>
                AI Artist • Visualization Specialist • ML Engineer
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="contact-footer-bar">
          <div>
            Designed and Developed by <span>Munem Sarker</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <MdCopyright /> {new Date().getFullYear()} Munem Sarker. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
