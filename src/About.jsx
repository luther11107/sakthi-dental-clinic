
import { Link } from 'react-router-dom'

const doctors = [
  { name: 'Dr. Anupriya', role: 'Founder' },
  { name: 'Dr. Ananya Iyer', role: 'Prosthodontist' },
  { name: 'Dr. Meera Subramanian', role: 'Endodontist' },
  { name: 'Dr. Arvind Kumar', role: 'Dental Surgeon' },
  { name: 'Dr. Sneha N', role: 'Orthodontist' },
  { name: 'Dr. Srinivas Rohit Ramanujam', role: 'Implantologist' },
  { name: 'Dr. Balu', role: 'Laser Surgeon' },
  { name: 'Dr. Vikram Raj Kishore', role: 'Aligners Partner' },
  { name: 'Dr. Ajay Jumar', role: 'Oral & Maxillofacial Surgeon' },
]

function About() {
  return (
    <div className="website about-page">
      <div className="topbar">
        Compassionate dental care for your whole family
      </div>

      <header className="navbar">
        <Link className="brand" to="/" aria-label="Sakthi Dental Clinic home">
          <span className="brand-icon">✳</span>
          <span>
            <strong>Sakthi Dental</strong>
            <small>CLINIC · HOSUR</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/about" aria-current="page">About</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/#facilities">Facilities</Link>
          <Link to="/#contact">Contact</Link>
        </nav>

        <Link className="nav-cta" to="/#contact">
          Fix an Appointment <span>↗</span>
        </Link>
      </header>

      <main>
        <section className="about-hero">
          <div className="about-hero-content">
            <span className="section-kicker">GET TO KNOW US</span>
            <h1>
              Your trusted partner in <span>dental care.</span>
            </h1>
            <p>
              At Sakthi Dental Clinic, we believe every smile deserves
              thoughtful attention, personalized care and a welcoming
              experience.
            </p>
            <Link className="primary-button" to="/#contact">
              Meet us at the clinic <span>↗</span>
            </Link>
          </div>

          <div className="about-hero-art" aria-hidden="true">
            <div className="about-art-circle">
              <span>✳</span>
              <strong>Care</strong>
              <strong>with a</strong>
              <strong>human touch.</strong>
              <small>SAKTHI DENTAL CLINIC · HOSUR</small>
            </div>
            <span className="about-art-star">✳</span>
          </div>
        </section>

        <section className="about-story section">
          <div className="about-story-label">
            <span className="section-kicker">OUR STORY</span>
            <h2>Built on experience. Guided by care.</h2>
            <div className="about-number">
              <strong>20+</strong>
              <span>Years of professional experience, as described in the clinic brief</span>
            </div>
          </div>

          <div className="about-story-copy">
            <h3>Meet Dr. Anupriya</h3>
            <p>
              Bringing over 20 years of expertise, Dr. Anupriya is a
              recognized dental professional in Hosur. She began her
              professional journey after graduating in 2000. During six
              impactful years at Mathura Clinic, she refined her clinical
              skills and strengthened her commitment to patient wellbeing.
            </p>
            <p>
              In 2004, Dr. Anupriya established Sakthi Dental Clinic in
              Hosur with a vision of making quality dental care accessible
              to the community. Her work also includes long-standing service
              as a dental consultant with the Primary Health Center at
              Chandara Hospital.
            </p>
            <p>
              Today, the clinic brings together modern dental practices
              and a patient-friendly environment. From preventive check-ups
              to specialized treatments, the team aims to make every visit
              comfortable and every care decision understandable.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="section-heading">
            <span className="section-kicker">WHAT GUIDES US</span>
            <h2>Our vision <span>& mission.</span></h2>
            <p>Our commitment to healthier smiles and a stronger community.</p>
          </div>

          <div className="values-grid">
            <article className="value-card">
              <div className="feature-icon">◎</div>
              <span className="section-kicker">OUR MISSION</span>
              <h3>Care that puts people first.</h3>
              <p>
                To provide personalized, compassionate and advanced dental
                services in a welcoming environment. We aim to help patients
                feel confident about their oral health through modern
                technology, continuous learning and attentive care.
              </p>
            </article>

            <article className="value-card">
              <div className="feature-icon">✧</div>
              <span className="section-kicker">OUR VISION</span>
              <h3>A healthier community, one smile at a time.</h3>
              <p>
                To be a trusted leader in modern dentistry through excellent
                patient care, innovation, preventive awareness and meaningful
                community engagement—helping people enjoy healthier, more
                confident smiles.
              </p>
            </article>
          </div>
        </section>

        <section className="team-section section">
          <div className="section-heading">
            <span className="section-kicker">THE PEOPLE BEHIND YOUR CARE</span>
            <h2>Meet our <span>dental team.</span></h2>
            <p>
              A team of professionals with different areas of dental
              expertise, working towards better patient care.
            </p>
          </div>

          <div className="team-grid">
            {doctors.map((doctor, index) => (
              <article className="team-card" key={doctor.name}>
                <div className="team-avatar" aria-hidden="true">
                  <span>{doctor.name.split(' ').filter(Boolean).slice(1).map(part => part[0]).join('').slice(0, 2)}</span>
                  <small>{String(index + 1).padStart(2, '0')}</small>
                </div>
                <h3>{doctor.name}</h3>
                <p>{doctor.role}</p>
              </article>
            ))}
          </div>

          <p className="team-note">
            Doctor names and specialties are presented as supplied in the
            clinic brief. Individual credentials should be confirmed by
            the clinic before publication.
          </p>
        </section>

        <section className="about-cta">
          <span className="section-kicker">WE'RE HERE WHEN YOU NEED US</span>
          <h2>Let's take care of your smile.</h2>
          <p>Have a question or want to plan a visit? We'd love to hear from you.</p>
          <Link className="light-button" to="/#contact">
            Contact our clinic <span>↗</span>
          </Link>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <Link className="brand footer-brand" to="/">
            <span className="brand-icon">✳</span>
            <span>
              <strong>Sakthi Dental</strong>
              <small>CLINIC · HOSUR</small>
            </span>
          </Link>
          <p>Thoughtful dental care for women, children and families.</p>
          <a className="footer-email" href="mailto:info@sakthidentalclinic.in">
            info@sakthidentalclinic.in ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sakthi Dental Clinic</span>
          <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/#treatments">Treatments</Link>
            <Link to="/#contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <Link to="/">Back to home ↑</Link>
        </div>
      </footer>
    </div>
  )
}

export default About
