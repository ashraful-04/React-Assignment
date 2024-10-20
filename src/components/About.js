import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-container">
          {/* About Text */}
          <div className="about-text">
            <h1>About Me</h1>
            <h2>I'm <span className="highlight">Ashraful Alom</span>, a passionate <span className="profession">learner</span>.</h2>
            <p className="description">
              I am currently pursuing a Bachelor of Computer Applications (BCA) from Assam Down Town University in Guwahati. 
              I am passionate about technology and constantly working to enhance my skills in programming and development.
            </p>
            <p className="description">
            I come from Bonaigaon, a beautiful town in Assam. It is a serene place . My hometown has shaped many of my values and my sense of community.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
