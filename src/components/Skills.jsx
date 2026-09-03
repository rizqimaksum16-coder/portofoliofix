import React from 'react';
import { Code2, Layout, Server, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      id: '01.',
      title: 'BAHASA PEMROGRAMAN',
      icon: <Code2 size={36} strokeWidth={1.5} className="tech-card-icon" />,
      description: 'Penguasaan berbagai bahasa pemrograman utama untuk logika sistem & struktur web.',
      skills: ['JavaScript', 'PHP', 'Python', 'C', 'HTML5', 'CSS3']
    },
    {
      id: '02.',
      title: 'FRONTEND DEVELOPMENT',
      icon: <Layout size={36} strokeWidth={1.5} className="tech-card-icon" />,
      description: 'Membangun antarmuka pengguna yang interaktif, responsif, dan intuitif.',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Vite', 'Bootstrap']
    },
    {
      id: '03.',
      title: 'BACKEND DEVELOPMENT',
      icon: <Server size={36} strokeWidth={1.5} className="tech-card-icon" />,
      description: 'Arsitektur server, perancangan RESTful API, dan manajemen bisnis logika.',
      skills: ['Laravel', 'Node.js', 'Express', 'REST API']
    },
    {
      id: '04.',
      title: 'DATABASE & TOOLS',
      icon: <Database size={36} strokeWidth={1.5} className="tech-card-icon" />,
      description: 'Pengelolaan basis data relasional & cloud serta alat pengembangan modern.',
      skills: ['MySQL', 'PostgreSQL', 'Supabase', 'Git', 'Linux']
    }
  ];

  return (
    <section
      id="tech"
      aria-labelledby="tech-heading"
      style={{
        paddingBlock: '5rem',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--outline-variant)',
        borderBottom: '1px solid var(--outline-variant)'
      }}
    >
      <div className="container">
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" id="tech-heading">
            Teknologi yang Dikuasai.
          </h2>
        </div>

        <div className="tech-grid">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="beverr-service-card">
              {/* Card Top Row: Icon & Faded Index Number */}
              <div className="card-top-row">
                <div className="icon-wrapper">{cat.icon}</div>
              </div>

              {/* Card Middle: Title */}
              <h3 className="service-card-title">{cat.title}</h3>

              {/* Card Description */}
              <p className="service-card-desc">{cat.description}</p>

              {/* Tech Chips */}
              <div className="tech-chips">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="chip">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tech-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 640px) {
          .tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .tech-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .beverr-service-card {
          background: var(--bg-card);
          border: 1px solid var(--outline-variant);
          border-radius: 20px;
          padding: 2rem 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .beverr-service-card:hover {
          border-color: var(--border-light);
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .card-top-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.75rem;
        }

        .icon-wrapper {
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tech-card-icon {
          color: var(--primary);
        }

        .faded-card-num {
          font-family: var(--font-body);
          font-size: 2.2rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--on-surface-muted);
          opacity: 0.25;
          line-height: 1;
        }

        .service-card-title {
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .service-card-desc {
          font-size: 0.84rem;
          color: var(--on-surface-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          z-index: 1;
        }

        .card-wave-bg {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 140px;
          height: 90px;
          pointer-events: none;
          color: var(--primary);
          z-index: 0;
        }
      `}</style>
    </section>
  );
}

