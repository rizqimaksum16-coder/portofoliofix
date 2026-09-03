import React from 'react';
import { Laptop, Code, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--outline-variant)',
        borderBottom: '1px solid var(--outline-variant)',
        paddingBlock: '5rem'
      }}
    >
      <div className="container">
        <div className="about-grid">

          {/* About Narrative */}
          <div className="about-body">
            <div>
              <h2 className="section-title" id="about-heading">
                Tentang Saya.
              </h2>
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <p
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}
              >
                Mahasiswa D3 Teknik Informatika di PENS &amp; Full-Stack Developer.
              </p>
              <p style={{ color: 'var(--on-surface-muted)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                Saya merupakan mahasiswa D3 Teknik Informatika di Politeknik Elektronika Negeri Surabaya yang berfokus pada pengembangan aplikasi web yang dapat menyelesaikan persoalan proses bisnis agar proses dan administrasi bisnis dapat berjalan dengan lancar. Selain itu saya juga suka melakukan pengembangan web untuk menciptakan inovasi baru agar project yang saya buat bisa bermanfaat untuk banyak orang. 
              </p>
            </div>


          </div>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: block;
        }

        .about-img-frame {
          aspect-ratio: 4 / 5;
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          background: var(--bg-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .workspace-laptop {
          width: 100%;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 12px;
          position: relative;
        }

        .laptop-screen {
          background: #0a0e1a;
          border: 1px solid var(--outline-variant);
          border-radius: 4px;
          height: 140px;
          overflow: hidden;
          padding: 12px;
        }

        .code-line {
          height: 6px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 3px;
          margin-bottom: 6px;
        }

        .code-line.c1 { width: 80%; background: rgba(129, 140, 248, 0.6); }
        .code-line.c2 { width: 60%; background: rgba(255, 255, 255, 0.12); }
        .code-line.c3 { width: 90%; background: rgba(167, 139, 250, 0.55); }
        .code-line.c4 { width: 45%; background: rgba(255, 255, 255, 0.08); }
        .code-line.c5 { width: 70%; background: rgba(129, 140, 248, 0.35); }

        .laptop-base {
          height: 10px;
          background: var(--border-light);
          border-radius: 0 0 8px 8px;
          margin-top: 2px;
        }

        .about-stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid var(--outline-variant);
        }

        .stat-card {
          background: rgba(var(--primary-rgb), 0.02);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          text-align: center;
        }

        .stat-item-val {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--primary);
        }

        .stat-item-label {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
          margin-top: 0.2rem;
        }
      `}</style>
    </section>
  );
}
