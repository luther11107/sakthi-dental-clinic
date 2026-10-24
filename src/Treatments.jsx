
import { Link } from 'react-router-dom'
import './App.css'

const treatments = [
  {
    number: '01',
    title: 'Teeth Cleaning & Scaling',
    description:
      'Professional cleaning to remove plaque and tartar, helping maintain healthy teeth and gums.',
  },
  {
    number: '02',
    title: 'Tooth Filling',
    description:
      'Treatment to restore teeth affected by cavities and minor tooth damage.',
  },
  {
    number: '03',
    title: 'Tooth Extraction',
    description:
      'Removal of a tooth when it cannot be preserved or when extraction is recommended.',
  },
  {
    number: '04',
    title: 'Artificial Complete Denture',
    description:
      'Custom-made dentures designed to replace missing teeth and support everyday function.',
  },
  {
    number: '05',
    title: 'Dental Implants',
    description:
      'A tooth-replacement option designed to support a replacement tooth where suitable.',
  },
  {
    number: '06',
    title: 'Laser Dentistry',
    description:
      'Dental procedures using laser technology when appropriate for the treatment.',
  },
  {
    number: '07',
    title: 'Root Canal Therapy',
    description:
      'Treatment to address infection or damage inside a tooth and help preserve it.',
  },
  {
    number: '08',
    title: 'Wisdom Tooth Extraction',
    description:
      'Assessment and removal of wisdom teeth when they cause problems or need treatment.',
  },
  {
    number: '09',
    title: 'Fixed Partial Denture (Bridge)',
    description:
      'A fixed dental restoration that replaces one or more missing teeth.',
  },
  {
    number: '10',
    title: 'Teeth Whitening (Bleaching)',
    description:
      'A cosmetic dental treatment intended to improve the appearance of tooth colour.',
  },
  {
    number: '11',
    title: 'Veneers',
    description:
      'Thin coverings placed on the front surface of teeth to improve their appearance.',
  },
  {
    number: '12',
    title: 'Pediatric Dentistry',
    description:
      'Dental care focused on children, with attention to their comfort and developing smiles.',
  },
  {
    number: '13',
    title: 'Flap Surgery',
    description:
      'A gum treatment that may be recommended for certain periodontal conditions.',
  },
  {
    number: '14',
    title: 'Orthodontic Braces',
    description:
      'Treatment that uses braces to help correct tooth alignment and bite concerns.',
  },
  {
    number: '15',
    title: 'Clear Aligners',
    description:
      'Removable transparent trays used to gradually move teeth in suitable cases.',
  },
]

function Treatments() {
  return (
    <div className="website">
      <div className="topbar">
        <p>Gentle dental care for your whole family</p>
        <p>Hosur, Tamil Nadu</p>
      </div>

      <header className="navbar">
        <Link to="/" className="brand">
          <span className="brand-icon">✦</span>
          <span>
            <strong>Sakthi Dental Clinic</strong>
            <small>Healthy smiles, happy families</small>
          </span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/treatments" className="active">Treatments</Link>
          <a href="/#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="/#contact">
          Book an Appointment
        </a>
      </header>

      <main>
        <section className="treatments-hero">
          <span className="eyebrow">OUR DENTAL SERVICES</span>
          <h1>Complete care for every smile.</h1>
          <p>
            From routine dental care to specialised treatments, explore the
            services offered at Sakthi Dental Clinic.
          </p>
          <div className="treatments-hero-actions">
            <a className="primary-btn" href="/#contact">
              Book an Appointment <span>↗</span>
            </a>
            <a className="secondary-btn" href="tel:+919862890897">
              Call Our Clinic
            </a>
          </div>
        </section>

        <section className="treatments-section">
          <div className="section-heading">
            <span className="eyebrow">HOW WE CAN HELP</span>
            <h2>Our treatments</h2>
            <p>
              Every smile is different. Our team can help you understand
              suitable treatment options for your dental needs.
            </p>
          </div>

          <div className="treatments-page-grid">
            {treatments.map((treatment) => (
              <article className="treatment-page-card" key={treatment.number}>
                <div className="treatment-card-top">
                  <span className="treatment-number">{treatment.number}</span>
                  <span className="treatment-symbol">✳</span>
                </div>
                <h3>{treatment.title}</h3>
                <p>{treatment.description}</p>
                <a href="/#contact" className="treatment-card-link">
                  Enquire about treatment <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="treatments-cta">
          <span className="eyebrow">WE'RE HERE TO HELP</span>
          <h2>Not sure which treatment you need?</h2>
          <p>
            Get in touch with our clinic to discuss your concerns and arrange
            a dental appointment.
          </p>
          <a href="/#contact" className="primary-btn">
            Contact the Clinic <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon">✦</span>
            <span>
              <strong>Sakthi Dental Clinic</strong>
              <small>Healthy smiles, happy families</small>
            </span>
          </Link>
          <p>Thoughtful dental care for women, children and families.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/treatments">Treatments</Link>
          <a href="/#contact">Contact</a>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Sakthi Dental Clinic. All rights reserved.
          <Link to="/privacy">Privacy Policy</Link>
        </p>
      </footer>
    </div>
  )
}

export default Treatments
