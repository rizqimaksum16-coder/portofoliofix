/**
 * Rule-Based Multi-Provider AI Service
 * Architecture:
 * Priority 1 -> Groq API (Primary Provider - Llama 3.3 70B)
 * Priority 2 -> Gemini API (Primary Key - Gemini 1.5 Flash)
 * Priority 3 -> Gemini API (Secondary Key - Gemini 1.5 Flash Backup)
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

// 1. Fetch Groq API (Priority 1)
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

  const modelsToTry = ['groq/compound-mini', 'groq/compound'];
  let lastError = null;

  for (const model of modelsToTry) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model,
          messages,
          temperature: 0.7,
          max_tokens: 500
        }),
        signal: AbortSignal.timeout(6000)
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Groq API Error (${model}): ${response.status} - ${errText}`);
      }

      const data = await response.json();
      const replyText = data.choices?.[0]?.message?.content;
      if (replyText) return replyText;
    } catch (err) {
      console.warn(`Attempt with Groq model ${model} failed:`, err.message);
      lastError = err;
    }
  }

  throw lastError || new Error("Failed to get valid response from Groq API");
}

// 2. Fetch Gemini API (Priority 2 & 3)
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

// Main Rule-Based Fallback Dispatcher
export async function getAiChatResponse(userMessage, history = [], localKnowledgeMatcher) {
  const GROQ_KEY = import.meta.env.VITE_GROQ_API_KEY;
  const GEMINI_KEY_1 = import.meta.env.VITE_GEMINI_API_KEY_1;
  const GEMINI_KEY_2 = import.meta.env.VITE_GEMINI_API_KEY_2;

  // Attempt Priority 1: Groq API (Primary Provider)
  if (GROQ_KEY) {
    try {
      const text = await callGroqApi(GROQ_KEY, userMessage, history);
      return { text, provider: 'Groq API (Primary)' };
    } catch (err) {
      console.warn("Priority 1 (Groq API) failed:", err.message);
    }
  }

  // Attempt Priority 2: Gemini Primary (Fallback Key 1)
  if (GEMINI_KEY_1) {
    try {
      const text = await callGeminiApi(GEMINI_KEY_1, userMessage, history);
      return { text, provider: 'Gemini Primary (Fallback)' };
    } catch (err) {
      console.warn("Priority 2 (Gemini Primary) failed:", err.message);
    }
  }

  // Attempt Priority 3: Gemini Secondary (Fallback Key 2)
  if (GEMINI_KEY_2) {
    try {
      const text = await callGeminiApi(GEMINI_KEY_2, userMessage, history);
      return { text, provider: 'Gemini Secondary (Fallback)' };
    } catch (err) {
      console.warn("Priority 3 (Gemini Secondary) failed:", err.message);
    }
  }

  // Priority 4: Local Knowledge Base Fallback
  console.info("All online AI API providers failed or missing keys. Falling back to Rule-Based Local KB.");
  const localReply = localKnowledgeMatcher(userMessage);
  return { text: localReply, provider: 'Local Rule Engine (Offline Fallback)' };
}
