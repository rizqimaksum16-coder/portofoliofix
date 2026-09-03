import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" style={{ paddingBlock: '5rem' }}>
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-grid">
            {/* Info Side */}
            <div className="contact-info">
              <div>
                <p className="section-eyebrow">Kontak</p>
                <h2 className="section-title" id="contact-heading">
                  Mari Berkolaborasi.
                </h2>
              </div>
              <p style={{ color: 'var(--on-surface-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginTop: '1rem' }}>
                Punya ide proyek, penawaran kerja sama, atau sekadar ingin bertegur sapa? Jangan ragu untuk menghubungi saya.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail size={18} className="contact-icon" />
                  <div>
                    <div className="contact-item-title">Email</div>
                    <a href="mailto:rizqi.maksum16@gmail.com" className="contact-item-link">
                      rizqi.maksum16@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <Phone size={18} className="contact-icon" />
                  <div>
                    <div className="contact-item-title">WhatsApp</div>
                    <a
                      href="https://wa.me/6285785470355"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item-link"
                    >
                      +62 857-8547-0355
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <MapPin size={18} className="contact-icon" />
                  <div>
                    <div className="contact-item-title">Lokasi</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}>
                      Surabaya, Indonesia (PENS)
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <Linkedin size={18} className="contact-icon" />
                  <div>
                    <div className="contact-item-title">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/m-rizqi-ma-sum-109094322"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item-link"
                    >
                      M. Rizqi Ma'sum
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <Github size={18} className="contact-icon" />
                  <div>
                    <div className="contact-item-title">GitHub</div>
                    <a
                      href="https://github.com/rizqimaksum16-coder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-item-link"
                    >
                      rizqimaksum16-coder
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="contact-form-container">
              {submitted ? (
                <div className="success-alert">
                  <CheckCircle2 size={32} color="var(--primary)" />
                  <h3>Pesan Terkirim!</h3>
                  <p>Terima kasih telah menghubungi. Saya akan membalas pesan Anda secepatnya.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Nama Lengkap *</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subjek</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Judul / Topik pesan"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Pesan *</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tuliskan pesan atau penawaran Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} /> Kirim Pesan
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-wrap {
          background: var(--bg-surface);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-lg);
          padding: 2.5rem 1.75rem;
          box-shadow: var(--shadow-md);
        }

        @media (min-width: 768px) {
          .contact-wrap {
            padding: 4rem;
          }
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 2fr 3fr;
            gap: 4rem;
          }
        }

        .contact-details {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }

        .contact-icon {
          color: var(--primary);
        }

        .contact-item-title {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
        }

        .contact-item-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--primary);
          transition: var(--transition);
        }

        .contact-item-link:hover {
          opacity: 0.75;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--on-surface-muted);
        }

        .form-group input, .form-group textarea {
          font-family: inherit;
          font-size: 0.9rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--outline-variant);
          background: rgba(var(--primary-rgb), 0.02);
          color: var(--on-surface);
          outline: none;
          transition: var(--transition);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.08);
        }

        .success-alert {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 3rem 1.5rem;
          gap: 0.8rem;
          background: rgba(var(--primary-rgb), 0.03);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-md);
        }
      `}</style>
    </section>
  );
}
