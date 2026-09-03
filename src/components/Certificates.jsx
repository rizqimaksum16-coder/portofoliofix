import React from 'react';
import { Award, ExternalLink, CalendarDays, Building2 } from 'lucide-react';

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'Online Course Certificate',
      issuer: 'ITS & U.S. Consulate General in Surabaya',
      year: '2026',
      category: 'Web Development',
      driveId: '14aXpslMVE782v8_1_MCUjeuRg_gMu9MW',
      imageUrl: 'https://lh3.googleusercontent.com/d/14aXpslMVE782v8_1_MCUjeuRg_gMu9MW',
      verifyUrl: 'https://drive.google.com/file/d/14aXpslMVE782v8_1_MCUjeuRg_gMu9MW/view'
    },
    {
      id: 2,
      title: 'Hackathon Certificate',
      issuer: 'Hackathon Competition',
      year: '2026',
      category: 'Hackathon & Innovation',
      driveId: '1m-g4yQYtKbrQsyugdD7GgUHUrWLfKWh5',
      imageUrl: 'https://lh3.googleusercontent.com/d/1m-g4yQYtKbrQsyugdD7GgUHUrWLfKWh5',
      verifyUrl: 'https://drive.google.com/file/d/1m-g4yQYtKbrQsyugdD7GgUHUrWLfKWh5/view'
    },
    {
      id: 3,
      title: 'Semi Finalist - Samsung Innovation Campus Batch 5',
      issuer: 'Samsung Innovation Campus',
      year: '2024',
      category: 'Innovation & Technology',
      driveId: '1zQ7JyhnDrZrs-r5PReLP-IKCYXC2LDUz',
      imageUrl: 'https://lh3.googleusercontent.com/d/1zQ7JyhnDrZrs-r5PReLP-IKCYXC2LDUz',
      verifyUrl: 'https://drive.google.com/file/d/1zQ7JyhnDrZrs-r5PReLP-IKCYXC2LDUz/view'
    }
  ];

  return (
    <section
      id="certificates"
      aria-labelledby="cert-heading"
      style={{
        paddingBlock: '5rem',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--outline-variant)',
        borderBottom: '1px solid var(--outline-variant)'
      }}
    >
      <div className="container">
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 className="section-title" id="cert-heading">
            Sertifikat &amp; Pencapaian.
          </h2>
        </div>

        <div className="cert-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="cert-card">
              {/* Image Preview loaded directly from GDrive CDN */}
              {cert.imageUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-img-container"
                  title="Klik untuk membuka sertifikat di Google Drive"
                >
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    loading="lazy"
                    className="cert-img"
                    onError={(e) => {
                      // Fallback thumbnail URL if needed
                      e.currentTarget.src = `https://drive.google.com/thumbnail?id=${cert.driveId}&sz=w800`;
                    }}
                  />
                  <div className="cert-img-overlay">
                    <span>Buka di Google Drive ↗</span>
                  </div>
                </a>
              )}

              <h3 className="cert-title" style={{ marginTop: '1rem' }}>{cert.title}</h3>

              <div className="cert-meta">
                <span className="cert-meta-item">
                  <Building2 size={12} />
                  {cert.issuer}
                </span>
                <span className="cert-meta-item">
                  <CalendarDays size={12} />
                  {cert.year}
                </span>
              </div>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-link"
                >
                  Lihat di Google Drive <ExternalLink size={12} />
                </a>
              )}

              <div className="cert-card-bar" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .cert-card {
          background: var(--bg-card);
          border: 1px solid var(--outline-variant);
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          position: relative;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .cert-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: var(--border-light);
        }

        .cert-img-container {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 10px;
          overflow: hidden;
          background: rgba(var(--primary-rgb), 0.04);
          border: 1px solid var(--outline-variant);
          margin-bottom: 0.85rem;
          display: block;
        }

        .cert-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.35s ease;
        }

        .cert-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.25s ease;
          color: #ffffff;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
        }

        .cert-img-container:hover .cert-img {
          transform: scale(1.04);
        }

        .cert-img-container:hover .cert-img-overlay {
          opacity: 1;
        }

        .cert-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .cert-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(var(--primary-rgb), 0.06);
          border: 1px solid var(--outline-variant);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          flex-shrink: 0;
        }

        .cert-category-tag {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
          background: rgba(var(--primary-rgb), 0.04);
          border: 1px solid var(--outline-variant);
          border-radius: 6px;
          padding: 0.2rem 0.55rem;
        }

        .cert-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: -0.02em;
          line-height: 1.35;
          margin-top: 0.25rem;
        }

        .cert-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }

        .cert-meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.04em;
          color: var(--on-surface-muted);
        }

        .cert-verify-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--accent-deco);
          margin-top: 0.5rem;
          transition: opacity 0.2s ease;
        }

        .cert-verify-link:hover {
          opacity: 0.75;
        }

        .cert-card-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-deco) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .cert-card:hover .cert-card-bar {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
