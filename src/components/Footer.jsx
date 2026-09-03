import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--outline-variant)',
        background: 'var(--bg-surface)',
        paddingBlock: '2.5rem'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <a
            href="#hero"
            style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              color: 'var(--primary)'
            }}
          >
            Rizqi.dev
          </a>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--on-surface-muted)' }}>
            &copy; 2026 M. Rizqi Ma'sum
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              background: 'transparent',
              border: '1px solid var(--outline-variant)',
              borderRadius: 'var(--radius-sm)',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              transition: 'var(--transition)'
            }}
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
