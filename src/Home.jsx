import { Link } from 'react-router-dom'
import './App.css'

const treatments = [
  {
    icon: '🦷',
    title: 'Tooth Extraction',
    description: 'Gentle care to remove damaged or problematic teeth.',
  },
  {
    icon: '✨',
    title: 'Teeth Cleaning',
    description: 'Professional cleaning for healthier teeth and gums.',
  },
  {
    icon: '😁',
    title: 'Teeth Whitening',
    description: 'Enhance your smile with professional whitening care.',
  },
  {
    icon: '🪥',
    title: 'Tooth Filling',
    description: 'Restore damaged teeth and protect against further decay.',
  },
  {
    icon: '🦷',
    title: 'Braces & Aligners',
    description: 'Personalized treatment to improve your tooth alignment.',
  },
  {
    icon: '💎',
    title: 'Dental Implants',
    description: 'Modern solutions to replace missing teeth.',
  },
]

function Home() {
  return (
    <div className="website">
      <div className="topbar">
        Compassionate dental care for your whole family
      </div>

      <header className="navbar">
        <a className="brand" href="#home" aria-label="Sakthi Dental Clinic home">
          <span className="brand-icon">✳</span>
          <span>
            <strong>Sakthi Dental</strong>
            <small>CLINIC · HOSUR</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <Link to="/about">About</Link>
          <Link to="/treatments">Treatments</Link>
          <a href="#facilities">Facilities</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Fix an Appointment <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR SMILE, OUR PRIORITY
            </div>

            <h1>
              A healthier smile,
              <br />
              a <span>happier you.</span>
            </h1>

            <p className="hero-description">
              Specialized Dental Care for Women, Children &amp; Families.
              Experience compassionate, expert-led dental services in a
              modern and welcoming environment.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contact">
                Fix an Appointment <span>↗</span>
              </a>
              <a className="secondary-button" href="#treatments">
                Explore Treatments <span>→</span>
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-icon">♡</div>
              <div>
                <strong>Care that puts you first</strong>
                <small>Comfortable care for every generation.</small>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb orb-one" />
            <div className="hero-orb orb-two" />

            <div className="hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                alt="Modern dental clinic treatment room"
              />
              <div className="image-caption">
                <span className="caption-symbol">✳</span>
                <div>
                  <strong>Welcome to better dental care</strong>
                  <small>Thoughtful care. Healthier smiles.</small>
                </div>
              </div>
            </div>

            <div className="floating-card">
              <span className="floating-icon">♡</span>
              <div>
                <strong>Gentle by nature</strong>
                <small>Care at every step</small>
              </div>
            </div>

            <div className="hero-decoration">✳</div>
          </div>

          <div className="hero-bottom-label">
            <span>01</span> · A LITTLE MORE REASON TO SMILE
          </div>
        </section>

        <section className="assurance" id="about">
          <div className="assurance-icon">✳</div>
          <div>
            <span>YOUR WELLBEING COMES FIRST</span>
            <h2>You are always in safe hands.</h2>
            <p>We are ready to help, with care you can feel.</p>
          </div>
          <a href="#contact" aria-label="Contact our clinic">↗</a>
        </section>

        <section className="section why-section">
          <div className="section-heading">
            <span className="section-kicker">THE SAKTHI DIFFERENCE</span>
            <h2>Dental care with <span>a human touch.</span></h2>
            <p>Modern dentistry, delivered with warmth, honesty and care.</p>
          </div>

          <div className="features-grid">
            <article className="feature-card">
              <div className="feature-icon">✳</div>
              <h3>All-in-One Care</h3>
              <p>From routine check-ups to specialized dental treatments, find care for your smile in one place.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">♡</div>
              <h3>Experienced Doctors</h3>
              <p>Our dental team focuses on personalized care and helping patients understand their treatment.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">✧</div>
              <h3>Patient-First Approach</h3>
              <p>Your comfort, safety and understanding remain central to every visit.</p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">⌘</div>
              <h3>Modern Technology</h3>
              <p>Contemporary dental equipment supports careful assessment and treatment.</p>
            </article>
          </div>
        </section>

        <section className="section treatments-section" id="treatments">
          <div className="section-heading">
            <span className="section-kicker">PERSONALIZED FOR YOUR SMILE</span>
            <h2>Explore our <span>services.</span></h2>
            <p>Discover dental treatments designed around your oral health needs.</p>
          </div>

          <div className="treatments-grid">
            {treatments.map((treatment) => (
              <article className="treatment-card" key={treatment.title}>
                <div className="treatment-icon">{treatment.icon}</div>
                <h3>{treatment.title}</h3>
                <p>{treatment.description}</p>
                <a href="#contact">
                  Enquire now <span>↗</span>
                </a>
              </article>
            ))}
          </div>

          <div className="treatments-footer">
            <p>Looking for a specific treatment? We're here to help.</p>
            <a className="primary-button" href="#contact">
              Talk to our team <span>↗</span>
            </a>
          </div>
        </section>

        <section className="facilities-section" id="facilities">
          <div className="facilities-copy">
            <span className="section-kicker">YOUR COMFORT MATTERS</span>
            <h2>A welcoming space, <span>every visit.</span></h2>
            <p>
              We want every patient to feel comfortable from arrival through
              every step of their dental care.
            </p>
          </div>

          <div className="facility-list">
            <div><span>01</span><strong>Convenient central location</strong><span>↗</span></div>
            <div><span>02</span><strong>Hassle-free parking</strong><span>↗</span></div>
            <div><span>03</span><strong>Wheelchair access</strong><span>↗</span></div>
            <div><span>04</span><strong>Daily clinic availability</strong><span>↗</span></div>
            <div><span>04</span><strong>Patient pickup and drop-off</strong><span>↗</span></div>
          </div>
        </section>

        <section className="appointment-banner">
          <div>
            <span className="section-kicker">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Ready to smile with confidence?</h2>
            <p>Take the first step towards caring for your smile.</p>
          </div>
          <a className="light-button" href="#contact">
            Fix an Appointment <span>↗</span>
          </a>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-copy">
            <span className="section-kicker">WE'RE HERE FOR YOU</span>
            <h2>Let's talk about <span>your smile.</span></h2>
            <p>Have a question or want to arrange a visit? Get in touch with our team.</p>

            <div className="contact-detail">
              <span>⌖</span>
              <div>
                <small>VISIT OUR CLINIC</small>
                <p>B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109</p>
              </div>
            </div>

            <div className="contact-detail">
              <span>☎</span>
              <div>
                <small>CALL OUR TEAM</small>
                <p>+91 9862890897</p>
                <p>+91 9363298118</p>
              </div>
            </div>

            <div className="contact-detail">
              <span>✉</span>
              <div>
                <small>EMAIL US</small>
                <p>info@sakthidentalclinic.in</p>
              </div>
            </div>

            <div className="contact-detail">
              <span>◷</span>
              <div>
                <small>CLINIC HOURS</small>
                <p>Sunday – Saturday, 9 AM – 7 PM</p>
              </div>
            </div>
          </div>

          <form 
          className="contact-form"
          action="https://formspree.io/f/xrppznjd"
          method="POST" 
          >
            <h3>We'd love to hear from you.</h3>
            <p>Fill in your details and let us know how we can help.</p>

            <label htmlFor="name">Your name *</label>
            <input id="name" name="name" type="text" placeholder="Enter your full name" required />

            <label htmlFor="email">Email address *</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />

            <label htmlFor="phone">Phone number *</label>
            <input id="phone" name="phone" type="tel" placeholder="+91" required />

            <label htmlFor="message">How can we help? (optional)</label>
            <textarea id="message" name="message" rows="3" placeholder="Tell us a little about your enquiry..." />

            <button className="primary-button form-submit" type="submit">
              Submit enquiry <span>↗</span>
            </button>
            <small className="form-note">Required fields are marked with an asterisk.</small>
          </form>
        </section>
      </main>

      <section className="testimonials-section" id="testimonials">
        <div className="section-heading">
          <span className="section-tag">PATIENT REVIEWS</span>
          <h2>What Our Patients Say</h2>
          <p>Your smiles and trust inspire us every day.</p>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "The clinic is clean, the staff are friendly, and the doctors
              explained my treatment clearly. I had a comfortable experience."
            </p>
            <h3>Happy Patient</h3>
            <span>Dental Treatment</span>
          </div>

          <div className="testimonial-card">
            <p>
              "The team was professional and caring. They made me feel relaxed
              throughout my visit."
            </p>
            <h3>Satisfied Patient</h3>
            <span>General Dentistry</span>
          </div>

          <div className="testimonial-card">
            <p>
              "The clinic was welcoming, and my treatment options were explained
              in a simple way. Thank you for the care."
            </p>
            <h3>Valued Patient</h3>
            <span>Patient Care</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-icon">✳</span>
            <span>
              <strong>Sakthi Dental</strong>
              <small>CLINIC · HOSUR</small>
            </span>
          </a>
          <p>Thoughtful dental care for women, children and families.</p>
          <a className="footer-email" href="mailto:info@sakthidentalclinic.in">
            info@sakthidentalclinic.in ↗
          </a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sakthi Dental Clinic</span>
          <div>
            <a href="#home">Home</a>
            <Link to="/about">About</Link>
            <Link to="/treatments">Treatments</Link>
            <a href="#contact">Contact</a>
            <Link to="/Privacy">Privacy</Link>
          </div>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default Home
