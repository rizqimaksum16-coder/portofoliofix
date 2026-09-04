import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, ShieldCheck, RefreshCw } from 'lucide-react';
import { getAiChatResponse } from '../services/aiService';

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: 'Halo! Saya Luxion, AI Portfolio Assistant milik M. Rizqi Ma’sum. Ada yang bisa saya bantu terkait profil, proyek, atau keahlian Full-Stack Rizqi?',
      provider: 'Rule Engine Ready'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [activeProvider, setActiveProvider] = useState('Rule Engine Ready');
  const chatEndRef = useRef(null);

  const knowledgeBase = [
    {
      keywords: ['siapa', 'tentang', 'profil', 'nama', 'siapa rizqi'],
      answer: 'M. Rizqi Ma’sum adalah mahasiswa D3 Teknik Informatika di PENS (Politeknik Elektronika Negeri Surabaya) dan seorang Full-Stack Developer yang berfokus membangun aplikasi web modern dan efisien.'
    },
    {
      keywords: ['pengalaman', 'magang', 'kerja', 'experience', 'dishub', 'aspire'],
      answer: 'Pengalaman Rizqi: 1) Staff Parkir (Magang) di DISHUB Kab. Blitar (Jan-Feb 2025) mengatur database pemetaan lokasi parkir via Google My Maps, 2) Peserta Bootcamp Aspire (Mar-Sep 2026) membangun Web App Bloodlink.'
    },
    {
      keywords: ['pendidikan', 'kuliah', 'kampus', 'sekolah', 'pens', 'udanawu'],
      answer: 'Pendidikan Rizqi: 1) D3 Teknik Informatika PENS (Politeknik Elektronika Negeri Surabaya, 2025–Sekarang), 2) MAS Ma’arif Udanawu - IPS (2022–2025).'
    },
    {
      keywords: ['proyek', 'karya', 'portofolio', 'project', 'vendora', 'bloodlink'],
      answer: 'Proyek unggulan Rizqi meliputi: 1) Bloodlink (Platform Donor Darah & AI Matching), 2) Vendora (E-Commerce Fashion Marketplace), serta Portfolio Web + Luxion AI Assistant ini.'
    },
    {
      keywords: ['demo', 'login', 'akun', 'password', 'credential', 'bloodlink login', 'masuk bloodlink'],
      answer: 'Akun demo Bloodlink: 1) Superadmin: superadmin@gmail.com (password123), 2) RS A: rumahsakita@gmail.com (password123), RS B: rumahsakitb@gmail.com (Password123@), 3) PMI A: pmi@gmail.com (password123), PMI B: pmib@gmail.com (Password123@), 4) Pendonor: reza@gmail.com (password123), 5) Driver: driver@gmail.com (password123).'
    },
    {
      keywords: ['cv', 'resume', 'download', 'unduh'],
      answer: 'Anda dapat mengunduh CV resmi M. Rizqi Ma’sum dalam format PDF langsung melalui tombol "Unduh CV" di halaman utama atau navigasi atas (terhubung ke Google Drive secara aman).'
    },
    {
      keywords: ['luxion', 'siapa kamu', 'siapa anda', 'nama kamu', 'namamu'],
      answer: 'Saya adalah Luxion, AI Portfolio Assistant resmi M. Rizqi Ma’sum yang bertugas membantu menjawab pertanyaan Anda terkait profil, pengalaman, proyek, dan keahlian Rizqi.'
    },
    {
      keywords: ['skill', 'keahlian', 'teknologi', 'stack', 'bahasa', 'framework'],
      answer: 'Keahlian teknis Rizqi meliputi: HTML5, CSS3, PHP, Bootstrap, React, JavaScript, C, MySQL, PostgreSQL, dan Python.'
    },
    {
      keywords: ['kontak', 'hubungi', 'email', 'whatsapp', 'wa', 'hiring', 'freelance'],
      answer: 'Anda bisa menghubungi Rizqi melalui WhatsApp di +62 857-8547-0355 (wa.me/6285785470355), email ke rizqi.maksum16@gmail.com, LinkedIn (linkedin.com/in/m-rizqi-ma-sum-109094322), atau melalui Form Kontak di bawah.'
    },
    {
      keywords: ['sertifikat', 'sertifikasi', 'prestasi', 'penghargaan', 'achievement', 'certificate'],
      answer: 'Sertifikat & Pencapaian Rizqi meliputi: 1) Online Course Certificate (ITS & U.S. Consulate General Surabaya, 2026), 2) Hackathon Certificate (Hackathon Competition, 2026), dan 3) Semi Finalist Samsung Innovation Campus Batch 5 (2024).'
    }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const matchLocalKnowledge = (queryText) => {
    const query = queryText.toLowerCase();
    for (const item of knowledgeBase) {
      if (item.keywords.some((k) => query.includes(k))) {
        return item.answer;
      }
    }
    return 'Terima kasih atas pertanyaannya! Saya Luxion, siap membantu. Silakan kirim pesan melalui Form Kontak di bawah untuk berdiskusi langsung dengan Rizqi.';
  };

  const handleSend = async (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    if (!userText) setInput('');
    setIsTyping(true);

    try {
      const history = messages.slice(-2);
      const response = await getAiChatResponse(textToSend, history, matchLocalKnowledge);

      setActiveProvider(response.provider);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: response.text,
          provider: response.provider
        }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackReply = matchLocalKnowledge(textToSend);
      setActiveProvider('Local Fallback');
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: fallbackReply,
          provider: 'Local Fallback'
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Clean Floating Trigger Button */}
      <button
        className="chatbot-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Luxion AI Assistant"
      >
        <Bot size={18} />
        <span className="trigger-text">Luxion AI Assistant</span>
      </button>

      {/* Chatbot Popup Drawer */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div className="bot-avatar">
                <Sparkles size={15} />
              </div>
              <div>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, margin: 0, color: '#fff' }}>
                  Luxion — AI Assistant
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)' }}>
                  <ShieldCheck size={12} color="#10b981" />
                  <span>Provider: {activeProvider}</span>
                </div>
              </div>
            </div>
            <button className="chatbot-close-btn" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="chatbot-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-bubble-wrap ${msg.sender === 'user' ? 'user' : 'ai'}`}
              >
                <div className={`chat-bubble ${msg.sender}`}>
                  {msg.text}
                  {msg.provider && (
                    <div className="provider-tag">{msg.provider}</div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="chat-bubble-wrap ai">
                <div className="chat-bubble ai typing">
                  <RefreshCw size={13} className="spin-icon" /> Memproses...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="quick-suggestions">
            <button onClick={() => handleSend('Siapa Rizqi Ma’sum?')}>Siapa Rizqi?</button>
            <button onClick={() => handleSend('Apa saja proyeknya?')}>Proyek utama?</button>
            <button onClick={() => handleSend('Apa saja sertifikatnya?')}>Sertifikat?</button>
            <button onClick={() => handleSend('Apa keahlian teknisnya?')}>Keahlian tech?</button>
          </div>

          {/* Input Footer */}
          <form
            className="chatbot-input-area"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              placeholder="Tanyakan sesuatu tentang Rizqi..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" aria-label="Kirim Pesan">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        .chatbot-trigger {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          background: #10b981;
          color: #ffffff;
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 24px;
          padding: 0.65rem 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 14px rgba(16, 185, 129, 0.25);
          z-index: 999;
          transition: var(--transition);
          cursor: pointer;
        }


        .trigger-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .chatbot-window {
          position: fixed;
          bottom: 5rem;
          right: 1.5rem;
          width: calc(100vw - 3rem);
          max-width: 360px;
          height: 460px;
          background: var(--bg-surface);
          border: 1px solid var(--outline-variant);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: modal-fade 0.25s ease-out;
        }

        .chatbot-header {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          padding: 0.85rem 1.1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .bot-avatar {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .chatbot-close-btn {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
        }

        .chatbot-body {
          flex: 1;
          padding: 1rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          background: rgba(var(--primary-rgb), 0.02);
        }

        .chat-bubble-wrap {
          display: flex;
          width: 100%;
        }

        .chat-bubble-wrap.user {
          justify-content: flex-end;
        }

        .chat-bubble-wrap.ai {
          justify-content: flex-start;
        }

        .chat-bubble {
          max-width: 85%;
          padding: 0.65rem 0.9rem;
          border-radius: 12px;
          font-size: 0.8rem;
          line-height: 1.5;
        }

        .chat-bubble.user {
          background: #059669;
          color: #ffffff;
          border-bottom-right-radius: 2px;
        }

        .chat-bubble.ai {
          background: var(--bg-surface);
          color: var(--on-surface);
          border: 1px solid var(--outline-variant);
          border-bottom-left-radius: 2px;
        }

        .chat-bubble.typing {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--on-surface-muted);
        }

        .provider-tag {
          font-family: var(--font-mono);
          font-size: 0.55rem;
          opacity: 0.6;
          margin-top: 0.25rem;
          text-align: right;
        }

        .spin-icon {
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .quick-suggestions {
          display: flex;
          gap: 0.4rem;
          padding: 0.5rem 0.8rem;
          overflow-x: auto;
          border-top: 1px solid var(--outline-variant);
          background: var(--bg-surface);
        }

        .quick-suggestions button {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          border: 1px solid var(--outline-variant);
          background: transparent;
          color: var(--on-surface-muted);
          white-space: nowrap;
          transition: var(--transition);
        }

        .quick-suggestions button:hover {
          color: var(--primary);
          border-color: var(--border-light);
        }

        .chatbot-input-area {
          display: flex;
          align-items: center;
          padding: 0.6rem 0.8rem;
          border-top: 1px solid var(--outline-variant);
          background: var(--bg-surface);
          gap: 0.5rem;
        }

        .chatbot-input-area input {
          flex: 1;
          border: none;
          background: transparent;
          font-family: inherit;
          font-size: 0.82rem;
          color: var(--on-surface);
          outline: none;
        }

        .chatbot-input-area button {
          background: #4f46e5;
          color: #ffffff;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }

        .chatbot-input-area button:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  );
}
