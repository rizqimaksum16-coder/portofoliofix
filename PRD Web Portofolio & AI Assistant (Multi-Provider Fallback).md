# **PRD: Web Portofolio & AI Assistant (Multi-Provider Fallback)**

---

## **1. App Overview & Objectives**

**Nama Project:** Personal Portfolio Web App with Integrated AI Assistant

**Pemilik Portofolio:** M. Rizqi Ma'sum
**Status Akademik:** Mahasiswa D3 Teknik Informatika, Politeknik Elektronika Negeri Surabaya (PENS)
**Spesialisasi:** Full-Stack Developer

**Deskripsi:**
Website portofolio interaktif dan responsif yang dirancang untuk menampilkan profil profesional, rekam jejak proyek, dan keahlian teknis Full-Stack Developer. Website ini dilengkapi dengan fitur unggulan berupa **AI Portfolio Assistant** berbasis *Rule-Based Multi-Provider Fallback* yang secara otomatis mengalihkan permintaan ke API Key/Provider cadangan jika kuota API utama habis.

**Tujuan Utama:**

- Menampilkan karya, latar belakang akademik PENS, dan keahlian teknologi secara profesional.
- Menyediakan saluran komunikasi interaktif 24/7 melalui AI Chatbot tanpa risiko interupsi akibat *rate limit* atau kuota API habis.
- Memudahkan calon klien, perekrut, maupun kolega untuk mengunduh CV dan mengirimkan pesan langsung.
- Membangun personal branding yang kuat sebagai Full-Stack Developer lulusan PENS.

---

## **2. Target User & User Stories**

### **Target User**

| Tipe User | Deskripsi |
| :--- | :--- |
| **Recruiter / HRD** | Menilai kualifikasi teknis dan kecocokan kandidat untuk posisi developer. |
| **Calon Klien** | Mengevaluasi portofolio proyek sebelum menawarkan kerja sama freelance. |
| **Tech Peer / Kolega** | Menjelajahi proyek dan bertukar ide dengan sesama developer. |
| **Pemilik (M. Rizqi Ma'sum)** | Mengelola konten proyek, data keahlian, dan konfigurasi API Key chatbot. |

### **User Stories**

| ID | Role | User Story | Acceptance Criteria |
| :--- | :--- | :--- | :--- |
| US-01 | Pengunjung | Ingin melihat rincian proyek beserta teknologi yang digunakan. | Setiap proyek menampilkan judul, deskripsi, tech stack, screenshot, dan link demo/repo. |
| US-02 | Pengunjung | Ingin bertanya langsung ke AI tentang pengalaman dan proyek Rizqi. | Chatbot merespon dalam < 3 detik dengan informasi akurat seputar portofolio. |
| US-03 | Pengunjung | Ingin chatbot tetap merespon meskipun kuota AI utama habis. | Sistem fallback berjalan otomatis tanpa error yang terlihat oleh pengguna. |
| US-04 | Pengunjung | Ingin mengunduh CV Rizqi dalam satu klik. | Tombol download CV tersedia di Hero Section dan menghasilkan file PDF. |
| US-05 | Pengunjung | Ingin mengirim pesan langsung ke Rizqi melalui website. | Contact Form berfungsi dan pengiriman dikonfirmasi dengan notifikasi sukses/gagal. |
| US-06 | Pemilik | Ingin mengonfigurasi urutan API Key (Primary & Fallback). | Urutan provider dapat diatur melalui environment variables tanpa mengubah kode. |

---

## **3. Tech Stack & Keputusan Arsitektur**

### **Stack yang Dipilih (Final)**

| Layer | Teknologi | Alasan |
| :--- | :--- | :--- |
| **Frontend Framework** | Next.js 14 (App Router) | SSR/SSG untuk SEO optimal, file-based routing, API Routes built-in. |
| **Styling** | Tailwind CSS | Utility-first, cepat untuk prototyping, konsisten dengan design system. |
| **Backend / API** | Next.js API Routes | Serverless-first, terintegrasi langsung dengan frontend tanpa server terpisah. |
| **Database** | Supabase (PostgreSQL) | Managed DB, Auth bawaan, real-time support, free tier cukup untuk portofolio. |
| **Deployment** | Vercel | Zero-config deployment untuk Next.js, environment variables management mudah. |
| **Email Service** | Resend | Modern email API, free tier 3.000 email/bulan, mudah diintegrasikan dengan Next.js. |
| **AI Providers** | Gemini API (Primary & Secondary) + Groq API (Fallback) | Quota gratis besar, latensi rendah, dokumentasi lengkap. |

### **Profile & Tech Stack Rizqi (untuk ditampilkan di website)**

| Kategori | Daftar Teknologi / Tools |
| :--- | :--- |
| **Bahasa Pemrograman** | C, PHP, JavaScript, Python, HTML5, CSS3 |
| **Frontend Development** | React, Next.js, Bootstrap, Tailwind CSS, Vite |
| **Backend Development** | Laravel, Node.js (Express) |
| **Database Management** | MySQL (XAMPP), PostgreSQL |
| **AI & Cloud Platforms** | Gemini API, Supabase, Vercel, Aiven |
| **OS & Dev Tools** | Linux (Debian LXDE), Visual Studio Code, Git |

---

## **4. Functional Requirements**

| ID | Fitur | Deskripsi |
| :--- | :--- | :--- |
| FR-01 | **Hero & Profile Section** | Identitas (M. Rizqi Ma'sum), status akademik PENS, spesialisasi, foto profil, dan tombol CTA (Unduh CV & Scroll to Contact). |
| FR-02 | **About Section** | Narasi singkat latar belakang, perjalanan belajar, dan motivasi sebagai Full-Stack Developer. |
| FR-03 | **Skills Showcase** | Pengelompokan visual berdasarkan kategori: Languages, Frontend, Backend, Database, Tools. |
| FR-04 | **Project Showcase** | Kartu proyek dengan thumbnail, judul, deskripsi, tech stack badge, dan link demo/repo. Mendukung filter berdasarkan kategori. |
| FR-05 | **AI Chatbot Widget** | Floating chat widget di pojok kanan bawah layar dengan system prompt yang di-inject berdasarkan data portofolio Rizqi. |
| FR-06 | **Fallback Engine** | Logika penanganan error otomatis yang mengalihkan permintaan AI ke provider cadangan. |
| FR-07 | **Contact Form** | Formulir kontak (Nama, Email, Subjek, Pesan) yang mengirim email ke pemilik via Resend API dan menyimpan pesan ke database. |
| FR-08 | **Download CV** | Tombol unduh CV yang menyajikan file PDF terbaru. |
| FR-09 | **Responsive Design** | Tampilan optimal di desktop (1280px+), tablet (768px), dan mobile (375px). |
| FR-10 | **Dark Mode** | Toggle dark/light mode dengan preferensi disimpan di localStorage. |

---

## **5. System Architecture: Rule-Based AI Fallback**

Sistem AI Chatbot mengeksekusi permintaan dengan urutan prioritas yang ketat untuk menjamin ketersediaan layanan 24/7.

### **Urutan Prioritas Provider**

| Priority | Provider | Environment Variable |
| :--- | :--- | :--- |
| 1 | Gemini API (Primary Key) | `GEMINI_API_KEY_1` |
| 2 | Gemini API (Secondary Key) | `GEMINI_API_KEY_2` |
| 3 | Groq API (Backup) | `GROQ_API_KEY` |

### **Aturan Fallback Execution**

```
REQUEST MASUK
     │
     ▼
[Provider 1: Gemini Primary]
     │ Sukses? ──YES──► Kirim Response ke User
     │ NO (Error 429/401/403/Timeout)
     ▼
[Provider 2: Gemini Secondary]
     │ Sukses? ──YES──► Kirim Response ke User
     │ NO
     ▼
[Provider 3: Groq API]
     │ Sukses? ──YES──► Kirim Response ke User
     │ NO
     ▼
[Graceful Fallback Message]
"AI Assistant sedang sibuk. Gunakan form kontak."
```

**Kondisi Trigger Fallback:**
- Error `429` — Too Many Requests / Quota Exceeded
- Error `401` / `403` — Invalid atau Expired API Key
- **Timeout** — Response tidak diterima dalam > 5 detik
- Error `500` / `503` — Server error dari provider

---

## **6. Data Schema & Relational Tables**

### **Table: `projects`**

| Field | Type | Constraint | Keterangan |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | ID unik proyek |
| `title` | VARCHAR(150) | NOT NULL | Judul proyek |
| `slug` | VARCHAR(150) | UNIQUE, NOT NULL | URL-friendly identifier |
| `description` | TEXT | NOT NULL | Deskripsi singkat proyek |
| `tech_stack` | TEXT[] | NOT NULL | Array teknologi yang digunakan |
| `category` | VARCHAR(50) | NOT NULL | Kategori: Web, Backend, Mobile, dll |
| `thumbnail_url` | VARCHAR(255) | NULLABLE | URL gambar/screenshot proyek |
| `demo_url` | VARCHAR(255) | NULLABLE | Link live demo |
| `repo_url` | VARCHAR(255) | NULLABLE | Link GitHub repository |
| `is_featured` | BOOLEAN | DEFAULT FALSE | Tampil di bagian "Featured Projects" |
| `status` | VARCHAR(20) | DEFAULT 'active' | Status: active / archived |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Tanggal proyek dibuat |
| `updated_at` | TIMESTAMP | DEFAULT NOW() | Tanggal terakhir diperbarui |

### **Table: `ai_providers`**

| Field | Type | Constraint | Keterangan |
| :--- | :--- | :--- | :--- |
| `id` | INT | PRIMARY KEY, AUTO_INCREMENT | ID provider |
| `provider_name` | VARCHAR(50) | NOT NULL | Nama provider (Gemini Primary, dll) |
| `api_key_env_var` | VARCHAR(100) | NOT NULL | Nama environment variable API Key |
| `provider_type` | VARCHAR(20) | NOT NULL | Tipe: gemini / groq |
| `priority_order` | INT | UNIQUE, NOT NULL | Urutan prioritas (1 = tertinggi) |
| `is_active` | BOOLEAN | DEFAULT TRUE | Status aktif/nonaktif provider |
| `last_error_at` | TIMESTAMP | NULLABLE | Waktu terakhir provider gagal |
| `error_count` | INT | DEFAULT 0 | Jumlah kumulatif kegagalan |

### **Table: `contact_messages`**

| Field | Type | Constraint | Keterangan |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PRIMARY KEY | ID pesan |
| `name` | VARCHAR(100) | NOT NULL | Nama pengirim |
| `email` | VARCHAR(150) | NOT NULL | Email pengirim |
| `subject` | VARCHAR(200) | NOT NULL | Subjek pesan |
| `message` | TEXT | NOT NULL | Isi pesan |
| `is_read` | BOOLEAN | DEFAULT FALSE | Status telah dibaca |
| `created_at` | TIMESTAMP | DEFAULT NOW() | Waktu pesan dikirim |

---

## **7. API Specification**

### **POST `/api/v1/chat`**

Menerima pesan dari pengguna dan mengembalikan respons dari AI provider yang tersedia.

**Request Body:**
```json
{
  "message": "string (required)",
  "conversation_history": [
    { "role": "user", "content": "string" },
    { "role": "assistant", "content": "string" }
  ]
}
```

**Response (200 - Success):**
```json
{
  "status": "success",
  "provider_used": "Gemini Primary",
  "reply": "string"
}
```

**Response (503 - All Providers Failed):**
```json
{
  "status": "error",
  "message": "Saat ini AI Assistant sedang sibuk. Silakan gunakan formulir kontak untuk mengirimkan pesan ke Rizqi."
}
```

### **POST `/api/v1/contact`**

Menerima pesan dari Contact Form, menyimpan ke database, dan mengirim notifikasi email.

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required, min 10 chars)"
}
```

**Response (200 - Success):**
```json
{
  "status": "success",
  "message": "Pesan berhasil dikirim. Rizqi akan membalasnya segera!"
}
```

---

## **8. Backend Implementation**

### **Fallback Engine — `/api/v1/chat/route.ts`**

```typescript
import { NextRequest, NextResponse } from 'next/server';

interface AIProvider {
  name: string;
  key: string | undefined;
  type: 'gemini' | 'groq';
}

// Konfigurasi provider berdasarkan urutan prioritas
const aiProviders: AIProvider[] = [
  { name: 'Gemini Primary',   key: process.env.GEMINI_API_KEY_1, type: 'gemini' },
  { name: 'Gemini Secondary', key: process.env.GEMINI_API_KEY_2, type: 'gemini' },
  { name: 'Groq Backup',      key: process.env.GROQ_API_KEY,      type: 'groq'   },
];

const SYSTEM_PROMPT = `Kamu adalah AI Assistant Portofolio M. Rizqi Ma'sum, mahasiswa D3 Teknik Informatika PENS dan Full-Stack Developer.
Keahlian teknis: C, PHP, JavaScript, Python, React, Next.js, Laravel, MySQL, PostgreSQL, Tailwind CSS, Linux (Debian).
Jawablah pertanyaan hanya berdasarkan data portofolio Rizqi. Gunakan bahasa yang ramah, profesional, dan ringkas.`;

export async function POST(req: NextRequest) {
  const { message, conversation_history } = await req.json();

  for (const provider of aiProviders) {
    if (!provider.key) continue;

    try {
      const reply = await executeAICall(provider, SYSTEM_PROMPT, message, conversation_history);
      return NextResponse.json({ status: 'success', provider_used: provider.name, reply });
    } catch (error: any) {
      console.warn(`[Fallback Triggered] ${provider.name} gagal (Error: ${error.message}). Mengalihkan ke provider berikutnya...`);
    }
  }

  return NextResponse.json(
    { status: 'error', message: 'AI Assistant sedang sibuk. Silakan gunakan formulir kontak.' },
    { status: 503 }
  );
}
```

---

## **9. Security Specification**

| Aspek | Implementasi |
| :--- | :--- |
| **API Key Storage** | Semua API Key disimpan di environment variables Vercel (tidak pernah di-commit ke Git). |
| **Rate Limiting** | Batasi endpoint `/api/v1/chat` maksimal **20 request/menit per IP** menggunakan `@upstash/ratelimit` + Redis. |
| **Input Validation** | Validasi semua input menggunakan library `zod` sebelum diproses. |
| **CORS Policy** | Hanya origin domain portofolio yang diizinkan mengakses API. |
| **CAPTCHA** | Integrasi Cloudflare Turnstile pada Contact Form untuk mencegah spam. |
| **HTTPS** | Dihandle otomatis oleh Vercel (SSL/TLS certificate). |
| **.env Gitignore** | File `.env.local` wajib ada di `.gitignore`. |

---

## **10. UI/UX Layout Specification**

### **Struktur Halaman (Single Page Application)**

```
┌──────────────────────────────────────────┐
│  NAVBAR  (Logo | Nav Links | Dark Toggle) │
├──────────────────────────────────────────┤
│  HERO SECTION                             │
│  Foto Profil | Nama | Titel | CTA Buttons │
├──────────────────────────────────────────┤
│  ABOUT SECTION                            │
│  Narasi singkat | Statistik (Proyek, dll) │
├──────────────────────────────────────────┤
│  SKILLS SECTION                           │
│  Grid ikon teknologi per kategori         │
├──────────────────────────────────────────┤
│  PROJECTS SECTION                         │
│  Filter Tabs | Kartu Proyek (Grid 3 col)  │
├──────────────────────────────────────────┤
│  CONTACT SECTION                          │
│  Info Kontak + Form (Nama|Email|Pesan)    │
├──────────────────────────────────────────┤
│  FOOTER  (Social Links | Copyright)       │
└──────────────────────────────────────────┘
                              ┌─────────────┐
                              │ 💬 AI Chat  │ ← Floating Widget
                              └─────────────┘
```

### **Design Tokens**

| Token | Value |
| :--- | :--- |
| **Primary Color** | `#6366F1` (Indigo) |
| **Secondary Color** | `#8B5CF6` (Violet) |
| **Accent** | `#06B6D4` (Cyan) |
| **Dark Background** | `#0F172A` |
| **Font** | Inter (Google Fonts) |
| **Border Radius** | `12px` (cards), `8px` (buttons) |

---

## **11. Deployment Strategy**

| Layer | Platform | Konfigurasi |
| :--- | :--- | :--- |
| **Frontend + API** | Vercel | Auto-deploy dari branch `main` GitHub |
| **Database** | Supabase | PostgreSQL managed, free tier |
| **Email** | Resend | API Key disimpan di Vercel env vars |
| **Rate Limiting** | Upstash Redis | Free tier, digunakan bersama `@upstash/ratelimit` |
| **Domain** | Custom Domain (opsional) | Konfigurasi di Vercel Dashboard |

### **Environment Variables yang Diperlukan di Vercel**

```env
GEMINI_API_KEY_1=...
GEMINI_API_KEY_2=...
GROQ_API_KEY=...
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
RESEND_API_KEY=...
UPSTASH_REDIS_REST_URL=...
UPSTASH_REDIS_REST_TOKEN=...
```

---

## **12. Non-Functional Requirements**

| Kategori | Target |
| :--- | :--- |
| **Performance** | Lighthouse Score ≥ 90 (Performance, Accessibility, SEO) |
| **Availability** | Uptime 99.9% (Vercel SLA) |
| **Response Time AI** | < 3 detik untuk response AI normal |
| **Fallback Time** | < 500ms untuk beralih antar provider |
| **Mobile Responsive** | Support 375px – 1920px viewport |
| **SEO** | Open Graph tags, meta description, sitemap.xml |

---

## **13. Out of Scope (v1.0)**

- Panel admin untuk mengelola proyek secara visual (CMS)
- Autentikasi/login untuk pemilik melalui website
- Blog atau artikel teknis
- Multi-bahasa (i18n)

---

*Dokumen ini terakhir diperbarui pada: 2026-08-31*
*Versi: 1.1 — Diperbaiki berdasarkan analisis gap oleh Antigravity AI*
