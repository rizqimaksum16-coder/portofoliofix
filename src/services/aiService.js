/**
 * Rule-Based Multi-Provider AI Service
 * Architecture:
 * Priority 1 -> Gemini API (Primary Key)
 * Priority 2 -> Gemini API (Secondary Key)
 * Priority 3 -> Groq API (Backup Key)
 * Priority 4 -> Local Knowledge Base (Offline / Quota Exceeded Fallback)
 */

const SYSTEM_PROMPT = `
Anda adalah AI Portfolio Assistant resmi untuk M. Rizqi Ma'sum.
Profil Singkat:
- Nama: M. Rizqi Ma'sum
- Status: Mahasiswa D3 Teknik Informatika di PENS (Politeknik Elektronika Negeri Surabaya)
- Spesialisasi: Full-Stack Developer (Web & AI Application)
- Keahlian Teknis: React, Next.js, Node.js, Express, Laravel, Tailwind CSS, MySQL, PostgreSQL, Python, C, Git, Linux.
- Proyek Unggulan:
  1. Bloodlink — Platform Donor Darah & AI Matching (React, Node.js, Express, Leaflet, MySQL)
  2. Vendora — E-Commerce Fashion Platform (HTML, CSS, JS, Vercel)
- Kontak: WhatsApp (+62 857-8547-0355), Email (rizqi.maksum16@gmail.com)

Tugas Anda:
Jawablah pertanyaan pengunjung dengan ramah, profesional, ringkas, dan akurat dalam bahasa Indonesia. Selalu bantu pengunjung mengenal profil dan proyek Rizqi.
`;

// 1. Fetch Gemini API
async function callGeminiApi(apiKey, userMessage, history = []) {
  if (!apiKey) throw new Error("Gemini API key is missing");

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  const contents = [
    { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
    { role: 'model', parts: [{ text: 'Siap! Saya siap membantu pengunjung mengenal profil M. Rizqi Ma\'sum.' }] },
    ...history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    })),
    { role: 'user', parts: [{ text: userMessage }] }
  ];

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents }),
    signal: AbortSignal.timeout(6000) // 6 seconds timeout
  });

  if (!response.ok) {
    throw new Error(`Gemini API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!replyText) throw new Error("Empty response from Gemini API");

  return replyText;
}

// 2. Fetch Groq API
async function callGroqApi(apiKey, userMessage, history = []) {
  if (!apiKey) throw new Error("Groq API key is missing");

  const url = 'https://api.groq.com/openai/v1/chat/completions';
  
  const messages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...history.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'assistant',
      content: msg.text
    })),
    { role: 'user', content: userMessage }
  ];

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages,
      temperature: 0.7,
      max_tokens: 500
    }),
    signal: AbortSignal.timeout(6000) // 6 seconds timeout
  });

  if (!response.ok) {
    throw new Error(`Groq API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const replyText = data.choices?.[0]?.message?.content;
  if (!replyText) throw new Error("Empty response from Groq API");

  return replyText;
}

// Main Rule-Based Fallback Dispatcher
export async function getAiChatResponse(userMessage, history = [], localKnowledgeMatcher) {
  const GEMINI_KEY_1 = import.meta.env.VITE_GEMINI_API_KEY_1;
  const GEMINI_KEY_2 = import.meta.env.VITE_GEMINI_API_KEY_2;
  const GROQ_KEY = import.meta.env.VITE_GROQ_API_KEY;

  // Attempt Priority 1: Gemini Primary
  if (GEMINI_KEY_1) {
    try {
      const text = await callGeminiApi(GEMINI_KEY_1, userMessage, history);
      return { text, provider: 'Gemini Primary' };
    } catch (err) {
      console.warn("Priority 1 (Gemini Primary) failed:", err.message);
    }
  }

  // Attempt Priority 2: Gemini Secondary (Fallback Key)
  if (GEMINI_KEY_2) {
    try {
      const text = await callGeminiApi(GEMINI_KEY_2, userMessage, history);
      return { text, provider: 'Gemini Secondary' };
    } catch (err) {
      console.warn("Priority 2 (Gemini Secondary) failed:", err.message);
    }
  }

  // Attempt Priority 3: Groq API (Backup Provider)
  if (GROQ_KEY) {
    try {
      const text = await callGroqApi(GROQ_KEY, userMessage, history);
      return { text, provider: 'Groq API (Backup)' };
    } catch (err) {
      console.warn("Priority 3 (Groq API) failed:", err.message);
    }
  }

  // Priority 4: Local Knowledge Base Fallback
  console.info("All online AI API providers failed or missing keys. Falling back to Rule-Based Local KB.");
  const localReply = localKnowledgeMatcher(userMessage);
  return { text: localReply, provider: 'Local Rule Engine (Offline Fallback)' };
}
