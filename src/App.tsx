import React, { useState } from "react";
import "./index.css";

const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
    <svg
      width="60"
      height="60"
      viewBox="0 0  50"
      fill="1"
      xmlns="https://svgsilh.com/svg/1294900.svg"
      aria-label="Pickleball Logo"
    >
      <circle cx="25" cy="25" r="19" stroke="#C1121F" strokeWidth="10" fill="#fff" />
      <circle cx="25" cy="25" r="16" fill="#C1121F" />
      <circle cx="25" cy="18" r="2" fill="#fff" />
      <circle cx="18" cy="25" r="2" fill="#fff" />
      <circle cx="32" cy="25" r="2" fill="#fff" />
      <circle cx="25" cy="32" r="2" fill="#fff" />
    </svg>
    <span className="logo-text">THE CHICAGO<br/>PICKLEBALL CLUB</span>
  </div>
);

const navLinks = [
  "Event Inquiry",
  "Membership",
];

const waysToPlay = [
  { id: 1, img: "https://images.unsplash.com/photo-1578855398110-d6b0ac6bbf39?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Singles Play" },
  { id: 2, img: "https://images.unsplash.com/photo-1731777347637-a14c7034b02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlbm5pcyUyMGNvdXJ0fGVufDB8fDB8fHww", alt: "Doubles Match" },
  { id: 3, img: "https://images.unsplash.com/photo-1718928336787-3299c8331793?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Outdoor Court" },
  { id: 4, img: "https://images.unsplash.com/photo-1693142518247-721cd8c73f88?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Lessons & Clinics" },
  { id: 5, img: "https://plus.unsplash.com/premium_photo-1709048989356-d50b671267aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Tournaments" },
];

const App = () => {
  // Contact form state
  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setContact({ name: "", email: "", message: "" });
  }

  return (
    <div>
      {/* Header */}
      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.50em 3em",
        borderBottom: "1px solid #e3e3e3",
        background: "#322d21"
      }}>
        <Logo />
        <div style={{ display: "flex", gap: `1em` }}>
          {navLinks.map(link => (
            <a href="#" key={link} className="nav-link" style={{ fontWeight: 650, fontSize: "1.3em" }}>{link}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section with strong CTA */}
      <section style={{
        position: "relative",
        background: "#ffffff url('https://plus.unsplash.com/premium_photo-1666975641882-950fa381cbc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHRlbm5pc3xlbnwwfHwwfHx8MA%3D%3D') center center/cover no-repeat",
        minHeight: 550,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4em 1.5em 1.5em 1.5em",
        textAlign: "center"
      }}>
       
        <div style={{ fontWeight: 800, fontSize: '5em', marginTop: 50 }}>
          CHICAGO PICKLEBALL CLUBS
        </div>
        <div style={{ marginTop: 55, fontWeight: 700, fontSize: '25px', color: '#cedbc8' }}>
          Community, Tournaments, Lessons, and more.
        </div>
        <button className="button-primary" style={{ marginTop: 75, fontSize: '1.22em', padding: '1em 2.5em' }}>
          Join Now
        </button>
      </section>

      {/* Ways to Play Section — no buttons, just images */}
      <section className="section-accent" style={{ padding: '2.5em 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 30, fontSize: '3em' }}>PICKLEBALL CULTURE</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 0, flexWrap: 'wrap' }}>
          {waysToPlay.map(wp => (
            <img
              key={wp.id}
              src={wp.img}
              alt={wp.alt}
              style={{ width: 130, height: 250, objectFit: 'cover', borderRadius: 12, border: '2px solid #322d21', boxShadow: '0 2px 8px #ddd' }}
            />
          ))}
        </div>
      </section>

      {/* Learn More CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2.0em 0' }}>
        <button className="button-primary" style={{ fontSize: '1.50em', padding: '0.83em 2.1em' }}>
          Learn More
        </button>
      </div>

      {/* Contact Us Section */}
      <section style={{ background: '#322d21', padding: '3em 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 10, fontSize: '2em' }}>Contact Us</h2>
        <div style={{ maxWidth: 390, margin: '0 auto', background: '#322d21', padding: '2em', borderRadius: 10, boxShadow: '0 2px 16px #eee' }}>
          {submitted ? (
            <div style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.15em', textAlign: 'center' }}>
              Thank you for reaching out! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contact.name}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.8em', borderRadius: 6, border: '1px solid #bbb', fontSize: '1em' }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={contact.email}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.8em', borderRadius: 6, border: '1px solid #bbb', fontSize: '1em' }}
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={contact.message}
                  onChange={handleChange}
                  required
                  style={{ padding: '0.8em', borderRadius: 6, border: '2px solid #bbb', fontSize: '1.5em' }}
                />
                <button type="submit" className="button-primary" style={{ fontSize: '1.5em' }}>Send</button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '15px 30px', background: 'var(--footer-bg)', color: 'var(--text-light)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: 2500, margin: '0 auto', padding: '0 2em' }}>
          <div style={{ flex: -2.5, minWidth: 700 }}>
            <Logo />
          </div>
          <div style={{ flex: 2, minWidth: 180, marginTop: 12 }}>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>Menu</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3, fontWeight: 400 }}>
              {navLinks.map(l => (
                <a key={l} href="#" className="nav-link" style={{ color: 'var(--text-light)' }}>{l}</a>
              ))}
              <a href="#" style={{ color: 'var(--text-light)' }}>Pricing and Hours</a>
            </div>
          </div>
          <div style={{ flex: 3, minWidth: 200, marginTop: 12 }}>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>Contact Us</div>
            <div style={{ color: '#fff', fontSize: '1em' }}>
              <div>For more information or questions send us an email l<br/>
                or email <a href="mailto:info@thechicagopickleball.club" style={{ color: '#fff' }}>info@thechicagopickleball.club</a>
              </div>
              <div style={{ marginTop: 8 }}>
                <a href="#" style={{ color: '#fff' }}>Terms of Service</a> | <a href="#" style={{ color: '#fff' }}>Privacy</a>
              </div>
            </div>
          </div>
          <div style={{ flex: 1.5, minWidth: 150, marginTop: 12 }}>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>Hours of Operation</div>
            <div style={{ color: '#fff' }}>Mon-Sun: 10am-8:30pm<br />at all locations</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 32, padding: '0.6em 0', background: '#cedbc8', color: '#322d21', fontSize: '1em' }}>
          © 2025 The Chicago Pickleball Club
        </div>
      </footer>
    </div>
  );
};

export default App;
