import { Mail, MapPin, Menu, Phone, X, Cog, Zap, Settings, Box, User, Calendar, FileText } from 'lucide-react'
import { useRef, useState } from 'react'
import type { JSX } from 'react'
import './App.css'
import FloatingWhatsApp from './components/FloatingWhatsApp'

const PHONE_DISPLAY = '+91 95136 95679'
const PHONE_TEL = '+919513695679'
const WHATSAPP_LINK = 'https://wa.me/919513695679'
const EMAIL = 'sncskpatil@gmail.com'

type TiltCardProps = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
}

// Lightweight, dependency-free 3D tilt effect — tracks the cursor and rotates
// the card in 3D space using CSS transforms. Pairs with the `perspective`
// already set on .site-shell in App.css.
function TiltCard({ as = 'div', className = '', children }: TiltCardProps) {
  const Tag = as as any
  const ref = useRef<HTMLElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const rotateX = (((e.clientY - rect.top) - rect.height / 2) / (rect.height / 2)) * -6
    const rotateY = (((e.clientX - rect.left) - rect.width / 2) / (rect.width / 2)) * 6
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`
  }

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <Tag ref={ref} className={`tilt-card ${className}`} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      {children}
    </Tag>
  )
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Tool Room & Design', href: '#tool-room' },
  { label: 'Machinery', href: '#machinery' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Aluminum Die Casting',
  'Gravity Die Casting',
  'Sand Casting',
  'Die Casting Dies',
  'CNC Milling Jobs',
  'CNC Turning Jobs',
  'CNC Machining',
]

/* strengths removed — reverting to original content */

const machinery = [
  {
    name: 'CNC Milling Machine',
    details: ['Make: DMG 635V', 'Year of Mfg: 2012', 'Qty: 01 no', 'Table Size: 850 mm', 'X-Axis stroke: 635 mm', 'Y-Axis stroke: 510 mm', 'Z-Axis stroke: 420 mm'],
  },
  {
    name: 'CNC Vertical Machining Centre Model:',
    details: ['Make: BFW(BMV60TC24)', '24-tool ATC', 'X axis - 1250mm', 'Y Axis - 600mm', 'Z Axis - 610mm','Siemens 828D CNC system','Ceramic bearings'],
  },
  {
    name: 'DRO Milling Machine',
    details: ['Make: Diamond', 'Year of Mfg: 2007', 'Qty: 01 no', 'Table Size: 1200 mm', 'X-Axis stroke: 870 mm', 'Y-Axis stroke: 400 mm'],
  },
  { name: 'Lathe Machine', details: ['Qty: 1 no'] },
  { name: 'Drilling Machine', details: ['Qty: 1 no'] },
  {
    name: 'CNC Turning Machine (LMW)',
    details: ['Maximum Turning Length: 700mm', 'Maximum OD: 420mm', 'Bar Capacity (SPINDLE): 102mm'],
  },
  {
    name: 'CNC Turning Machine (MORISEIKI)',
    details: ['Maximum Turning Length: 500mm', 'Maximum OD: 320mm', 'Bar Capacity (SPINDLE): 42mm'],
  },
]

const address = 'Survey no.109, Site No.07, Near Pipe Line Road, Keshava Industrial Area, Kachohalli Village, Off Magadi Main Road, Dasanpura Hobli, Bangalore North Taluk, Bangalore-560112'

function FloatingElements() {
  return (
    <div className="floating-elements">
      <div className="floating-element element-1">
        <Box size={48} />
      </div>
      <div className="floating-element element-2">
        <Cog size={48} />
      </div>
      <div className="floating-element element-3">
        <Settings size={48} />
      </div>
      <div className="floating-element element-4">
        <Zap size={48} />
      </div>
    </div>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="site-shell">
      <FloatingElements />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">
            <img src="/assets/SN.png" alt="SN logo" className="brand-logo" />
          </span>
        </a>
        <button className="menu-button" type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={isMenuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="section-inner hero-grid">
            <div>
              <p className="eyebrow">Established in 2006</p>
              <h1>Sree Nandishwara Castings</h1>
              <p className="lead">Aluminum Die Casting, Gravity Die Casting, and CNC Machining Solutions.</p>
              <div className="hero-actions">
                <a className="primary-link" href="#contact">Contact</a>
                <a className="secondary-link" href="#machinery">Machinery</a>
              </div>
            </div>
            <div className="hero-panel" aria-label="Main services">
              <span>Aluminum Die Casting</span>
              <span>Gravity Die Casting</span>
              <span>CNC Machining Solutions</span>
            </div>
          </div>
        </section>

        {/* Strengths section removed — restored original layout */}

        <section className="section" id="about">
          <div className="section-inner two-column">
            <div className="about-content">
              <p className="eyebrow">About Us</p>
              <h2>Company Introduction</h2>
              <p><strong>Sree Nandishwara Castings</strong>, established under the vision of <strong>Late Shri Sharath Kumar Patil</strong>, is a leading <strong>Aluminum Die Casting</strong> company with <strong>nearly two decades of industry experience</strong>. We are one of the few companies offering <strong>non-ferrous die casting processes</strong>, including <strong>Gravity Die Casting</strong>, under one roof.</p>

              <p>We specialize in <strong>CNC Milling Jobs, CNC Turning Jobs, CNC Machining</strong>, and <strong>Jigs & Fixtures</strong>, delivering precision-engineered solutions across various industries.</p>

              <p>Our strength lies in our <strong>experienced technical team</strong>, <strong>modern CNC & VMC machines</strong>, <strong>quality assurance</strong>, <strong>competitive pricing</strong>, <strong>on-time delivery</strong>, <strong>customer-focused approach</strong>, and <strong>quick development support</strong>.</p>

              <p>Driven by quality and advanced technology, we continue to deliver reliable engineering solutions that consistently meet customer expectations.</p>

            </div>
            <div className="profile-list" role="list">
              <div className="profile-row" role="listitem">
                <div className="info-label">Company Name</div>
                <div className="info-value">Sree Nandishwara Castings</div>
              </div>
              <div className="profile-row" role="listitem">
                <div className="info-label">Established</div>
                <div className="info-value">28-01-2006</div>
              </div>
              <div className="profile-row" role="listitem">
                <div className="info-label">Location</div>
                <div className="info-value">Bangalore</div>
              </div>
              <div className="profile-row" role="listitem">
                <div className="info-label">Contact</div>
                <div className="info-value">Shilpa. N (proprietrix)</div>
              </div>
              <div className="profile-row" role="listitem">
                <div className="info-label">GST No</div>
                <div className="info-value">29AHAPN0519J2ZC</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section muted" id="services">
          <div className="section-inner">
            <p className="eyebrow">Services</p>
            <h2>Products and Services</h2>
            <div className="card-grid">
              {services.map((service) => (
                <TiltCard as="article" className="simple-card" key={service}>
                  <h3>{service}</h3>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tool-room">
          <div className="section-inner two-column">
            <div>
              <p className="eyebrow">Tool Room & Design</p>
              <h2>Mould Design, CAD/CAM, and Tool Room</h2>
              <p>The most important part of moulds is the design. We have years of experience in designing the most complex and intricate moulds, whether they may be rotating cores, automatic slides, high cavitation moulds, hot runner moulds etc.</p>
              <p>The latest in 3D Engineering Software is used to aid design and CAM programming.</p>
            </div>
            <TiltCard className="simple-card feature-card">
              <h3>Tool Room</h3>
              <p>Design capability with Unigraphics. Conventional machines like lathe drilling milling surface grinding. EDM with 3axis DRO and CNC machining facility (VMC & Turning Centre).</p>
            </TiltCard>
          </div>
        </section>

        <section className="section muted" id="machinery">
          <div className="section-inner">
            <p className="eyebrow">Machinery</p>
            <h2>List of Machineries & Equipments</h2>
            <div className="machine-grid">
              {machinery.map((machine) => (
                <TiltCard as="article" className="simple-card" key={machine.name}>
                  <h3>{machine.name}</h3>
                  <ul>
                    {machine.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted" id="contact">
          <div className="section-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Address and Contact Details</h2>
              <div className="contact-list">
                <p><MapPin size={20} /> {address}</p>
                <p><Phone size={20} /> <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></p>
                <p><Phone size={20} /> <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp {PHONE_DISPLAY}</a></p>
                <p><Mail size={20} /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              </div>
              <iframe
                className="map"
                title="Sree Nandishwara Castings Google Map"
                loading="lazy"
                src={`https://www.google.com/maps?q=${encodeURIComponent('Sree Nandishwara Castings, Kachohalli, Karnataka')}&output=embed`}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-column">
            <p className="footer-heading">About Company</p>
            <p>Sree Nandishwara Castings</p>
            <p>Established 2006</p>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Quick Links</p>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#machinery">Machinery</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Products & Services</p>
            <p>Gravity Die Casting</p>
            <p>CNC Milling</p>
            <p>CNC Turning</p>
            <p>CNC Machining</p>
            <p>Jigs & Fixtures</p>
          </div>

          <div className="footer-column">
            <p className="footer-heading">Contact</p>
            <p>📍 Bangalore</p>
            <p>📞 <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></p>
            <p>✉ <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            <p><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Sree Nandishwara Castings. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>
      <FloatingWhatsApp />
    </div>
  )
}

export default App
