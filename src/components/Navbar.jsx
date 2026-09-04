import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '70px',
        zIndex: 100,
        background: scrolled ? 'var(--bg-surface)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--outline-variant)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'var(--transition)'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: 0
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a
            href="#hero"
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: 'var(--primary)'
            }}
          >
            Rizqi.dev
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'none',
            gap: '2rem',
            alignItems: 'center'
          }}
          className="desktop-nav"
        >
          <a href="#about" className="nav-link">About</a>
          <a href="#tech" className="nav-link">Technology</a>
          <a href="#work" className="nav-link">Project</a>
          <a href="#certificates" className="nav-link">Certificate</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="https://drive.google.com/file/d/1ecdjx_R6VgSdzj2WJv7aC6IJY1CQGX7_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary desktop-resume"
            style={{ padding: '0.55rem 1.25rem', fontSize: '0.75rem', display: 'none' }}
          >
            <Download size={14} /> CV
          </a>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--outline-variant)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>Tentang</a>
          <a href="#tech" onClick={() => setMobileMenuOpen(false)}>Teknologi</a>
          <a href="#work" onClick={() => setMobileMenuOpen(false)}>Proyek</a>
          <a href="#certificates" onClick={() => setMobileMenuOpen(false)}>Sertifikat</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Kontak</a>
          <a
            href="https://drive.google.com/file/d/1ecdjx_R6VgSdzj2WJv7aC6IJY1CQGX7_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ justifyContent: 'center', marginTop: '0.5rem' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Download size={14} /> Unduh CV
          </a>
        </div>
      )}

      <style>{`
        .nav-link {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--primary);
        }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-resume { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
