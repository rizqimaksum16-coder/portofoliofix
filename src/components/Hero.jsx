import React from 'react';
import { Download, Mail, Github, Linkedin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Perkenalan"
      style={{
        minHeight: '100vh',
        paddingTop: '90px',
        paddingBottom: '4rem',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Intro Details */}
          <div className="hero-content">
            <div className="hero-tag">
              <span className="hero-tag-text">Tersedia untuk freelance</span>
            </div>

            <h1 className="hero-name">
              M. Rizqi <span className="accent">Ma'sum.</span>
            </h1>

            <p className="hero-subtitle">
              Full-Stack Developer &amp; Mahasiswa D3 Teknik Informatika PENS — membangun aplikasi web yang bagus secara tampilan dan dengan sistem yang dapat berjalan dengan baik.
            </p>

            <div className="hero-cta">
              <a href="/cv.pdf" download className="btn-primary">
                <Download size={15} /> Unduh CV
              </a>
              <a href="#contact" className="btn-ghost">
                Hubungi Saya
              </a>
            </div>



            {/* Stat Row */}
            <div className="hero-stats">
              <div className="hero-stat-item">
                <span className="hero-stat-num">2</span>
                <span className="hero-stat-label">Proyek</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-num">3</span>
                <span className="hero-stat-label">Sertifikat</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-num">D3</span>
                <span className="hero-stat-label">IT B PENS</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <a
                href="https://github.com/rizqimaksum16-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <Github size={14} /> GitHub
              </a>
              <span className="social-divider"></span>
              <a
                href="https://www.linkedin.com/in/m-rizqi-ma-sum-109094322"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <span className="social-divider"></span>
              <a
                href="https://wa.me/6285785470355"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <Phone size={14} /> WhatsApp
              </a>
              <span className="social-divider"></span>
              <a href="mailto:rizqi.maksum16@gmail.com" className="hero-social-link">
                <Mail size={14} /> rizqi.maksum16@gmail.com
              </a>
            </div>
          </div>

          {/* Right Column: Clean Developer Card */}
          <div className="hero-card">
            <div className="hero-img-frame">
              {/* Clean Floating Tech Badges */}
              <div className="hero-deco-chip hero-deco-chip-1">
                <span>UI/UX</span>
              </div>
              <div className="hero-deco-chip hero-deco-chip-2">
                <span>Full-Stack</span>
              </div>
              <div className="hero-deco-chip hero-deco-chip-3">
                <span>Web Dev</span>
              </div>

              {/* Portrait Photo */}
              <div className="hero-img-inner">
                <img
                  src="/foto-rizqi.jpg"
                  alt="M. Rizqi Ma'sum — Full-Stack Developer"
                  className="hero-photo"
                />
              </div>
            </div>

            {/* Bottom Status Card */}
            <div className="hero-card-badge">
              <div className="badge-icon">⚡</div>
              <div>
                <div className="badge-value">Full-Stack Developer</div>
                <div className="badge-label">PENS — Surabaya</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Topo Wave Background */
        .hero-topo-wave {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M0 60 Q15 40 30 60 Q45 80 60 60 Q75 40 90 60 Q105 80 120 60' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 80 Q15 60 30 80 Q45 100 60 80 Q75 60 90 80 Q105 100 120 80' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 40 Q15 20 30 40 Q45 60 60 40 Q75 20 90 40 Q105 60 120 40' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 100 Q15 80 30 100 Q45 120 60 100 Q75 80 90 100 Q105 120 120 100' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3Cpath d='M0 20 Q15 0 30 20 Q45 40 60 20 Q75 0 90 20 Q105 40 120 20' fill='none' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E");
          background-size: 120px 120px;
        }

        [data-theme="dark"] .hero-topo-wave {
          opacity: 0.06;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cpath d='M0 60 Q15 40 30 60 Q45 80 60 60 Q75 40 90 60 Q105 80 120 60' fill='none' stroke='%23fff' stroke-width='1.5'/%3E%3Cpath d='M0 80 Q15 60 30 80 Q45 100 60 80 Q75 60 90 80 Q105 100 120 80' fill='none' stroke='%23fff' stroke-width='1.5'/%3E%3Cpath d='M0 40 Q15 20 30 40 Q45 60 60 40 Q75 20 90 40 Q105 60 120 40' fill='none' stroke='%23fff' stroke-width='1.5'/%3E%3Cpath d='M0 100 Q15 80 30 100 Q45 120 60 100 Q75 80 90 100 Q105 120 120 100' fill='none' stroke='%23fff' stroke-width='1.5'/%3E%3Cpath d='M0 20 Q15 0 30 20 Q45 40 60 20 Q75 0 90 20 Q105 40 120 20' fill='none' stroke='%23fff' stroke-width='1.5'/%3E%3C/svg%3E");
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            gap: 2rem;
            align-items: center;
          }
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.85rem;
          border: 1px solid var(--outline-variant);
          background: var(--bg-surface);
          border-radius: var(--radius-sm);
          width: fit-content;
          margin-bottom: 1.5rem;
        }


        .hero-tag-text {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
        }

        .hero-name {
          font-size: clamp(2.6rem, 6.5vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .hero-squiggle {
          display: block;
          margin-top: 0.3rem;
          margin-bottom: 1rem;
          width: clamp(130px, 55%, 220px);
          height: auto;
          opacity: 0.9;
        }

        .hero-subtitle {
          font-size: 0.98rem;
          color: var(--on-surface-muted);
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          padding-top: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .hero-stat-item {
          display: flex;
          flex-direction: column;
        }

        .hero-stat-num {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--primary);
          line-height: 1;
        }

        .hero-stat-label {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
          margin-top: 0.2rem;
        }

        .hero-socials {
          display: flex;
          gap: 1.25rem;
          align-items: center;
        }

        .hero-social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
          transition: var(--transition);
        }

        .hero-social-link:hover {
          color: var(--primary);
        }

        .social-divider {
          width: 1px;
          height: 12px;
          background: var(--outline-variant);
        }

        /* Clean Card Architecture */
        .hero-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          align-self: center;
          padding-inline: 0;
          width: 100%;
          max-width: 320px;
          margin: 2rem auto 0 auto;
        }

        @media (min-width: 900px) {
          .hero-card {
            margin-top: 0;
          }
        }

        .hero-img-frame {
          position: relative;
          width: 220px;
          height: 220px;
          flex-shrink: 0;
          overflow: visible;
          animation: hero-float 4s ease-in-out infinite;
          margin: 0 auto;
        }

        @media (min-width: 640px) {
          .hero-img-frame {
            width: 250px;
            height: 250px;
          }
        }

        .hero-img-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid var(--outline-variant);
          box-shadow: var(--shadow-md);
          position: relative;
          background: var(--bg-surface);
        }

        .hero-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 10%;
          transform: scale(1.6);
          transform-origin: center 15%;
          display: block;
          transition: transform 0.5s ease;
        }

        .hero-img-inner:hover .hero-photo {
          transform: scale(1.65);
        }

        .hero-deco-chip {
          position: absolute;
          display: flex;
          align-items: center;
          background: var(--bg-surface);
          border: 1px solid var(--outline-variant);
          border-radius: 8px;
          padding: 0.3rem 0.65rem;
          box-shadow: var(--shadow-sm);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--primary);
          z-index: 10;
          white-space: nowrap;
        }

        .hero-deco-chip-1 { top: -10px; left: 8%; }
        .hero-deco-chip-2 { top: 22%; right: -6px; }
        .hero-deco-chip-3 { bottom: 18%; left: -6px; }

        .hero-card-badge {
          margin-top: 1.25rem;
          width: 100%;
          max-width: 300px;
          background: var(--bg-surface);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          margin-inline: auto;
        }

        .badge-icon {
          width: 32px;
          height: 32px;
          background: rgba(var(--primary-rgb), 0.06);
          border: 1px solid var(--outline-variant);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          font-size: 0.85rem;
          flex-shrink: 0;
        }

        .badge-value {
          font-weight: 700;
          font-size: 0.82rem;
          color: var(--primary);
        }

        .badge-label {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
        }

        @media (max-width: 640px) {
          .hero-img-frame {
            width: 190px;
            height: 190px;
          }
          .hero-deco-chip {
            padding: 0.22rem 0.5rem;
            font-size: 0.6rem;
          }
          .hero-deco-chip-1 { top: -8px; left: 4%; }
          .hero-deco-chip-2 { top: 20%; right: -4px; }
          .hero-deco-chip-3 { bottom: 16%; left: -4px; }
          .hero-socials {
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .hero-stats {
            gap: 1.5rem;
          }
        }

        .badge-online {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.58rem;
          color: var(--on-surface-muted);
        }

        .badge-online-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
        }
      `}</style>
    </section>
  );
}
