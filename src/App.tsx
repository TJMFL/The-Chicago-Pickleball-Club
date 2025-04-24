import React, { useState } from "react";
import "./index.css";

const Logo = () => (
  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
    <svg
      width="44"
      height="44"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pickleball Logo"
    >
      <circle cx="25" cy="25" r="19" stroke="#C1121F" strokeWidth="5" fill="#fff" />
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
  "Ways to Play",
  "Event Inquiry",
  "Membership",
  "FAQ"
];

const waysToPlay = [
  { id: 1, img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?fit=crop&w=400&q=80", alt: "Singles Play" },
  { id: 2, img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?fit=crop&w=400&q=80", alt: "Doubles Match" },
  { id: 3, img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80", alt: "Outdoor Court" },
  { id: 4, img: "https://images.unsplash.com/photo-1693142518247-721cd8c73f88?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Lessons & Clinics" },
  { id: 5, img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?fit=crop&w=400&q=80", alt: "Tournaments" },
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
        padding: "0.75em 2em",
        borderBottom: "1px solid #e3e3e3",
        background: "#fff"
      }}>
        <Logo />
        <div style={{ display: "flex", gap: 24 }}>
          {navLinks.map(link => (
            <a href="#" key={link} className="nav-link" style={{ fontWeight: 600, fontSize: "1.05em" }}>{link}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section with strong CTA */}
      <section style={{
        position: "relative",
        background: "#fff",
        minHeight: 420,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4em 1em 1em 1em",
        textAlign: "center"
      }}>
        <Logo />
        <div style={{ fontWeight: 600, fontSize: '1.2em', marginTop: 24 }}>
          CHICAGO PICKLEBALL CLUBS
        </div>
        <div style={{ marginTop: 18, fontWeight: 500, fontSize: '1.1em', color: '#444' }}>
          Pickleball, Chicago Locations, where to play - without the hassle of searching.
        </div>
        <button className="button-primary" style={{ marginTop: 34, fontSize: '1.22em', padding: '1em 2.5em' }}>
          Join Now
        </button>
      </section>

      {/* Ways to Play Section — no buttons, just images */}
      <section className="section-accent" style={{ padding: '3em 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 24, fontSize: '2.2em' }}>Ways to Play</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 0, flexWrap: 'wrap' }}>
          {waysToPlay.map(wp => (
            <img
              key={wp.id}
              src={wp.img}
              alt={wp.alt}
              style={{ width: 130, height: 190, objectFit: 'cover', borderRadius: 12, border: '2px solid #C1121F', boxShadow: '0 2px 8px #ddd' }}
            />
          ))}
        </div>
      </section>

      {/* Learn More CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '1.0em 0' }}>
        <button className="button-primary" style={{ fontSize: '1.07em', padding: '0.83em 2.1em' }}>
          Learn More
        </button>
      </div>

      {/* Contact Us Section */}
      <section style={{ background: '#fff', padding: '3em 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 10, fontSize: '2em' }}>Contact Us</h2>
        <div style={{ maxWidth: 390, margin: '0 auto', background: '#f6f6f6', padding: '2em', borderRadius: 10, boxShadow: '0 2px 16px #eee' }}>
          {submitted ? (
            <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.15em', textAlign: 'center' }}>
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
                  style={{ padding: '0.8em', borderRadius: 6, border: '1px solid #bbb', fontSize: '1em' }}
                />
                <button type="submit" className="button-primary" style={{ fontSize: '1.14em' }}>Send</button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2em 0 0.7em 0', background: 'var(--footer-bg)', color: 'var(--text-light)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', padding: '0 2em' }}>
          <div style={{ flex: 10, minWidth: 350 }}>
            <Logo />
          </div>
          <div style={{ flex: 2, minWidth: 180, marginTop: 12 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Menu</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontWeight: 400 }}>
              {navLinks.map(l => (
                <a key={l} href="#" className="nav-link" style={{ color: 'var(--text-light)' }}>{l}</a>
              ))}
              <a href="#" style={{ color: 'var(--text-light)' }}>Pricing and Hours</a>
            </div>
          </div>
          <div style={{ flex: 2, minWidth: 200, marginTop: 12 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Contact Us</div>
            <div style={{ color: '#fff', fontSize: '1em' }}>
              <div>For more information or questions send us an email.<br/>
              </div>
              <div style={{ marginTop: 8 }}>
                <a href="#" style={{ color: '#fff' }}>Terms of Service</a> | <a href="#" style={{ color: '#fff' }}>Privacy</a>
              </div>
            </div>
          </div>
          <div style={{ flex: 3, minWidth: 150, marginTop: 12 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Hours of Operation</div>
            <div style={{ color: '#fff' }}>Mon-Sun: 10am-8:30pm, at all locations</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 32, padding: '0.6em 0', background: '#222', color: '#fff', fontSize: '1em' }}>
          © 2025 The Chicago Pickleball Club
        </div>
      </footer>
    </div>
  );
};

export default App;
