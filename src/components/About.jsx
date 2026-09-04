import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function About() {
  const experiences = [
    {
      role: 'Staff Parkir (Magang)',
      company: 'DISHUB Kab. Blitar',
      location: 'Blitar',
      period: 'Januari 2025 – Februari 2025',
      description: 'Membantu mengatur database pemetaan lokasi parkir resmi di wilayah Kabupaten Blitar menggunakan Google My Maps sebagai penyimpan database lokasi.'
    },
    {
      role: 'Peserta Bootcamp (Online & Offline)',
      company: 'Bootcamp Aspire',
      location: 'Surabaya',
      period: 'Maret 2026 – September 2026 (Berlangsung)',
      description: 'Membuat Web App bernama Bloodlink untuk mempermudah distribusi darah antara Pendonor, PMI, dan Rumah Sakit.'
    }
  ];

  const education = [
    {
      institution: 'Politeknik Elektronika Negeri Surabaya (PENS)',
      degree: 'D3 Teknik Informatika',
      period: '2025 – Sekarang',
      description: 'Fokus pada pengembangan aplikasi web, algoritma, rekayasa perangkat lunak, dan arsitektur database relasional & cloud.'
    },
    {
      institution: 'MAS Ma’arif Udanawu',
      degree: 'Jurusan IPS',
      period: '2022 – 2025',
      description: 'Menyelesaikan pendidikan menengah atas dengan konsentrasi Ilmu Knowledge Sosial.'
    }
  ];

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
        {/* About Header & Bio */}
        <div style={{ maxWidth: '800px', marginBottom: '3.5rem' }}>
          <h2 className="section-title" id="about-heading">
            Tentang Saya.
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--primary)',
              lineHeight: 1.6,
              marginTop: '1.25rem',
              marginBottom: '1rem'
            }}
          >
            Mahasiswa D3 Teknik Informatika di PENS &amp; Full-Stack Developer
          </p>
          <p style={{ color: 'var(--on-surface-muted)', fontSize: '0.96rem', lineHeight: 1.8 }}>
            Saya adalah mahasiswa D3 Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS).
            Saya memiliki kemampuan dalam membangun Web App yang memiliki tampilan nyaman dan responsive serta dapat menciptakan sistem yang membuat pekerjaan menjadi lebih efisien.
            Saya juga memiliki kemampuan untuk berinovasi untuk mengatasi permasalahan di sekitar saya dengan kemampuan coding yang saya miliki.
          </p>
        </div>

        {/* Experience & Education Grid */}
        <div className="experience-education-grid">
          {/* Experience Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <Briefcase size={20} style={{ color: 'var(--primary)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
                Pengalaman Kerja &amp; Magang
              </h3>
            </div>

            <div className="timeline-stack">
              {experiences.map((exp, idx) => (
                <div key={idx} className="timeline-card">
                  <div className="card-header-row">
                    <span className="card-role">{exp.role}</span>
                    <span className="card-period">
                      <Calendar size={12} /> {exp.period}
                    </span>
                  </div>
                  <div className="card-company">
                    {exp.company} — <span style={{ fontWeight: 400, color: 'var(--on-surface-muted)' }}>{exp.location}</span>
                  </div>
                  <p className="card-desc">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
              <GraduationCap size={22} style={{ color: 'var(--primary)' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '-0.02em' }}>
                Pendidikan
              </h3>
            </div>

            <div className="timeline-stack">
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-card">
                  <div className="card-header-row">
                    <span className="card-role">{edu.degree}</span>
                    <span className="card-period">
                      <Calendar size={12} /> {edu.period}
                    </span>
                  </div>
                  <div className="card-company">{edu.institution}</div>
                  <p className="card-desc">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-education-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 860px) {
          .experience-education-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }

        .timeline-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .timeline-card {
          background: var(--bg-card);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .timeline-card:hover {
          border-color: var(--border-light);
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }

        .card-role {
          font-weight: 800;
          font-size: 1rem;
          color: var(--primary);
        }

        .card-period {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--on-surface-muted);
          background: rgba(var(--primary-rgb), 0.05);
          border: 1px solid var(--outline-variant);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
        }

        .card-company {
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--primary);
          margin-bottom: 0.75rem;
        }

        .card-desc {
          font-size: 0.86rem;
          color: var(--on-surface-muted);
          line-height: 1.65;
        }
      `}</style>
    </section>
  );
}
