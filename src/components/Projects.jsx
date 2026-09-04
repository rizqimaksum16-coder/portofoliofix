import React, { useState } from 'react';
import { ExternalLink, Github, X, Activity, ShoppingBag, ShieldCheck, MapPin, Cpu, CheckCircle2, UserCheck, Key, Copy, Check } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  const projects = [
    {
      id: 'bloodlink',
      title: 'Bloodlink — Platform Donor Darah & AI Matching',
      category: 'fullstack',
      categoryLabel: 'Full-Stack & AI Platform',
      icon: <Activity size={32} />,
      description: 'Platform digital manajemen dan distribusi donor darah yang dilengkapi dengan ai recommendation system.',
      features: [
        'Dashboard 5 Peran (Pendonor, PMI, Rumah Sakit, Driver, Admin)',
        'Sistem Rekomendasi & AI Blood Matching berbasis skor',
        'Pelacakan Kurir Darah Real-Time berbasis Leaflet GPS',
        'Verifikasi Kehadiran & Check-in via Pemindai Kode QR',
        'Manajemen Ledger Stok Darah & Integrasi REST API MySQL'
      ],
      tech: ['React 19', 'TypeScript', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS', 'Leaflet', 'AI Matching'],
      demoUrl: 'https://bloodlink-neon-hive.vercel.app/',
      repoUrl: 'https://github.com/rizqimaksum16-coder/Bloodlink',
      gradient: 'linear-gradient(135deg, #052e16 0%, #064e3b 50%, #047857 100%)',
      demoAccounts: [
        { role: 'Superadmin', email: 'superadmin@gmail.com', password: 'password123' },
        { role: 'Rumah Sakit A', email: 'rumahsakita@gmail.com', password: 'password123' },
        { role: 'Rumah Sakit B', email: 'rumahsakitb@gmail.com', password: 'Password123@' },
        { role: 'PMI A', email: 'pmi@gmail.com', password: 'password123' },
        { role: 'PMI B', email: 'pmib@gmail.com', password: 'Password123@' },
        { role: 'Pendonor', email: 'reza@gmail.com', password: 'password123' },
        { role: 'Driver', email: 'driver@gmail.com', password: 'password123' }
      ]
    },
    {
      id: 'vendora',
      title: 'Vendora — E-Commerce Fashion Platform',
      category: 'fullstack',
      categoryLabel: 'E-Commerce Marketplace',
      icon: <ShoppingBag size={32} />,
      description: 'Platform marketplace & e-commerce fashion modern dengan katalog produk, keranjang belanja, varian ukuran, checkout interaktif, serta manajemen transaksi.',
      features: [
        'Katalog Produk Fashion Interaktif dengan Filtering Kategori & Pencarian',
        'Sistem Keranjang Belanja & Pemilihan Ukuran/Varian Produk',
        'Form Checkout Lengkap (Alamat, Metode Pembayaran Transfer/E-Wallet/COD)',
        'Upload Bukti Transfer / Pembayaran QRIS Interaktif',
        'Riwayat Transaksi & Form Hubungi Kami'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST API', 'Vercel Deployment'],
      demoUrl: 'https://vendora-backend-three.vercel.app/',
      repoUrl: '',
      gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)'
    }
  ];


  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      style={{
        background: 'var(--bg-main)',
        borderTop: '1px solid var(--outline-variant)',
        borderBottom: '1px solid var(--outline-variant)',
        paddingBlock: '5rem'
      }}
    >
      <div className="container">
        {/* Header */}
        <div>
          <h2 className="section-title" id="work-heading">
            Project Terbaik!
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" style={{ marginTop: '2.5rem' }}>
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-img-wrap" style={{ background: project.gradient }}>
                <div className="mock-lines">
                  <div className="mock-bar" style={{ width: '80%' }}></div>
                  <div className="mock-bar" style={{ width: '60%' }}></div>
                  <div className="mock-bar" style={{ width: '90%' }}></div>
                </div>

                <div className="mock-content">
                  <span className="mock-icon">{project.icon}</span>
                  <span className="mock-title">{project.title}</span>
                </div>

                <div className="project-actions">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-action-btn"
                      title="Live Demo"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-action-btn"
                      title="Source Code"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="category-badge">{project.categoryLabel}</span>
                </div>
                <p className="project-desc">{project.description}</p>

                {project.demoAccounts && (
                  <div style={{ marginBlock: '0.75rem', padding: '0.5rem 0.75rem', background: 'rgba(5, 46, 22, 0.4)', borderRadius: '6px', border: '1px dashed rgba(52, 211, 153, 0.4)', fontSize: '0.72rem', color: '#a7f3d0', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <UserCheck size={14} style={{ color: '#34d399', flexShrink: 0 }} />
                    <span>Tersedia Akun Demo (Superadmin, RS, PMI, Pendonor, Driver)</span>
                  </div>
                )}

                <div className="project-chips">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--outline-variant)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--on-surface-muted)' }}>Klik untuk detail lengkap & akun demo</span>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ fontSize: '0.7rem', padding: '0.4rem 0.75rem' }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={12} /> Buka Live Demo
                    </a>
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ fontSize: '0.7rem', padding: '0.4rem 0.75rem' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={12} /> Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>

            <div className="modal-header-banner" style={{ background: selectedProject.gradient }}>
              <span className="modal-icon">{selectedProject.icon}</span>
              <h2>{selectedProject.title}</h2>
            </div>

            <div className="modal-body">
              <span className="category-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>
                {selectedProject.categoryLabel}
              </span>
              <p style={{ color: 'var(--on-surface-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {selectedProject.description}
              </p>

              {selectedProject.features && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.6rem', color: 'var(--primary)' }}>
                    Fitur Utama Platform:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.83rem', color: 'var(--on-surface-muted)' }}>
                        <CheckCircle2 size={15} style={{ color: '#10b981', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.demoAccounts && (
                <div style={{ marginBottom: '1.5rem', background: 'rgba(5, 46, 22, 0.25)', border: '1px solid rgba(52, 211, 153, 0.3)', borderRadius: '10px', padding: '1rem' }}>
                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <UserCheck size={16} /> Akun Demo Pengujian (Live Demo Credentials):
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.65rem' }}>
                    {selectedProject.demoAccounts.map((acc, idx) => (
                      <div key={idx} style={{ background: 'var(--bg-surface)', padding: '0.65rem 0.8rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#60a5fa' }}>{acc.role}</span>
                          <button
                            onClick={() => handleCopy(`${acc.email} | ${acc.password}`, idx)}
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: copiedIdx === idx ? '#10b981' : 'var(--on-surface-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.7rem', padding: '0.2rem 0.4rem', borderRadius: '4px' }}
                            title="Salin Email & Password"
                          >
                            {copiedIdx === idx ? <Check size={12} /> : <Copy size={12} />}
                            {copiedIdx === idx ? 'Tersalin' : 'Salin'}
                          </button>
                        </div>
                        <div style={{ fontSize: '0.73rem', color: 'var(--on-surface-muted)', fontFamily: 'var(--font-mono)', lineHeight: 1.4 }}>
                          <div><span style={{ opacity: 0.7 }}>Email:</span> <span style={{ color: '#f3f4f6' }}>{acc.email}</span></div>
                          <div><span style={{ opacity: 0.7 }}>Pass:</span> <span style={{ color: '#f3f4f6' }}>{acc.password}</span></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>
                Teknologi yang Digunakan:
              </h4>
              <div className="project-chips" style={{ marginBottom: '2rem' }}>
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.75rem', padding: '0.6rem 1.25rem' }}
                >
                  <ExternalLink size={14} /> Buka Live Demo
                </a>
                <a
                  href={selectedProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ fontSize: '0.75rem', padding: '0.6rem 1.25rem' }}
                >
                  <Github size={14} /> Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .work-header {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        @media (min-width: 768px) {
          .work-header {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-end;
          }
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .project-card {
          background: var(--bg-surface);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-md);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--secondary);
          box-shadow: var(--shadow-md);
        }

        .project-img-wrap {
          position: relative;
          aspect-ratio: 21 / 9;
          max-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .mock-lines {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.25rem;
          gap: 0.4rem;
          opacity: 0.15;
        }

        .mock-bar {
          height: 4px;
          border-radius: 2px;
          background: #ffffff;
        }

        .mock-content {
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #ffffff;
        }

        .mock-icon {
          font-size: 1.8rem;
        }

        .mock-title {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .project-actions {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          display: flex;
          gap: 0.4rem;
          z-index: 10;
        }

        .card-action-btn {
          width: 32px;
          height: 32px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #182637;
          transition: var(--transition);
        }

        .card-action-btn:hover {
          background: var(--secondary);
          color: #ffffff;
        }

        .project-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          flex: 1;
        }

        .project-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary);
        }

        .category-badge {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          background: rgba(var(--primary-rgb), 0.06);
          color: var(--secondary);
        }

        .project-desc {
          font-size: 0.84rem;
          color: var(--on-surface-muted);
          line-height: 1.6;
        }

        .project-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.4rem;
        }

        /* Modal Styles */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          background: var(--bg-surface);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 560px;
          max-height: calc(85vh - 2rem);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-lg);
          animation: modal-fade 0.3s ease-out;
        }

        @keyframes modal-fade {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(var(--primary-rgb), 0.1);
          border: 1px solid var(--outline-variant);
          border-radius: 50%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          z-index: 10;
          backdrop-filter: blur(8px);
        }

        .modal-close:hover {
          background: rgba(var(--primary-rgb), 0.2);
        }

        .modal-header-banner {
          padding: 2.25rem 1.5rem;
          color: #ffffff;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
        }

        .modal-icon {
          font-size: 2.5rem;
        }

        .modal-body {
          padding: 1.5rem;
          overflow-y: auto;
          flex: 1;
        }
      `}</style>
    </section>
  );
}
