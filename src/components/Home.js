import './Home.css';
import myProfilePic from '../assets/images/profile.png'; // Make sure the profile image is available

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-text">
          <p className="welcome-text">WELCOME TO MY WORLD</p>
          <h1>Hi, I'm <span className="highlight">Ashraful Alom</span></h1>
          <h2>a <span className="profession">Student</span>.</h2>
          <p className="description">
          I am a passionate learner currently pursuing my education. I am focused on developing my skills in both academics and extracurricular areas to grow personally and professionally.
          </p>

        </div>

        {/* Profile Picture */}
        <div className="hero-image">
          <img src={myProfilePic} alt="Profile" className="profile-pic" />
        </div>
      </section>
    </div>
  );
}

export default Home;
