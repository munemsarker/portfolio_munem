import { useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "./styles/Work.css";
import WorkImage from "./WorkImage";

const projects = [
  {
    title: "AI Product Photography",
    category: "Commercial AI Visualization",
    tools: "Google Flow, Google Gemini, Photoshop, Geometry Preservation",
    image: "/images/proj-aiphoto.png",
    link: "https://www.fiverr.com/munem_ai",
  },
  {
    title: "GenZ Agro Agritech Campaign",
    category: "Brand Strategy & Marketing",
    tools: "Visual Direction, Promotional Campaigns, BDT 3M+ Raised",
    image: "/images/proj-genzagro.png",
    link: "https://bd.linkedin.com/in/munemsarker",
  },
  {
    title: "Atelier Vedantika Luxury Brand",
    category: "Brand Design & Mockups",
    tools: "Adobe Illustrator, Photoshop, Premium Bag Visualization",
    image: "/images/proj-atelier.png",
    link: "https://www.fiverr.com/munem_ai",
  },
  {
    title: "Predictive Analytics & ML",
    category: "Data Science & Machine Learning",
    tools: "Python, Scikit-learn, EDA, NACTAR A+ Certified Pipeline",
    image: "/images/proj-datascience.png",
    link: "https://github.com/munemsarker",
  },
  {
    title: "ICPC Asia Regional Contest",
    category: "Algorithms & Competitive Programming",
    tools: "C++, Python, Graph Theory, 20th Position Asia Contest",
    image: "/images/proj-icpc.png",
    link: "https://github.com/munemsarker",
  },
  {
    title: "Interactive Digital Experience",
    category: "Full-Stack & Creative Technology",
    tools: "WordPress, React, Three.js, ICT Division Recognition",
    image: "/images/proj-digital.png",
    link: "https://github.com/munemsarker",
  },
];

const Work = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const scrollAmount = trackRef.current.clientWidth * 0.75;
      trackRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="work-section" id="work">
      <div className="work-container">
        <div className="work-header">
          <div>
            <h2>
              Selected <span>Works</span>
            </h2>
            <p className="work-subtitle">
              Featured Case Studies • AI Visualization & Machine Learning
            </p>
          </div>
          <div className="work-nav-controls">
            <button
              onClick={() => scroll("left")}
              className="work-nav-btn"
              aria-label="Previous Project"
              data-cursor="disable"
            >
              <MdArrowBack />
            </button>
            <button
              onClick={() => scroll("right")}
              className="work-nav-btn"
              aria-label="Next Project"
              data-cursor="disable"
            >
              <MdArrowForward />
            </button>
          </div>
        </div>

        <div className="work-flex" ref={trackRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div className="work-tools-wrap">
                  <span className="work-tools-label">Tech & Approach</span>
                  <p className="work-tools-text">{project.tools}</p>
                </div>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
