# Ticto × Ebulição — Landing Page

Landing page promocional para o evento Ebulição por Rafa Prado × Ticto.
Permite cadastro de participantes para concorrer a um iPhone 16 Pro.

## 🚀 Deploy

**Produção:** [https://ticto-ebulicao.vercel.app](https://ticto-ebulicao.vercel.app) *(Substitua pela URL real após o deploy)*

## 🛠️ Tech Stack

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| Next.js | 16.1.6 | App Router, SSR/SSG |
| React | 19 | UI components |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Design tokens, utility classes |
| Supabase JS | 2 | Backend-as-a-Service (leads table) |
| canvas-confetti | 1.9 | Wow effect on form submit |
| Vercel | — | Deploy e CDN |

## 📐 Arquitetura

- `src/app/` — Next.js App Router (layout, page, globals.css)
- `src/components/` — Server + Client components (Hero, Rules, SignupForm, Footer)
- `src/lib/supabase.ts` — Supabase singleton client
- `public/images/` — Figma assets (SVGs, PNGs)

## 🏃 Dev local

```bash
# 1. Clone e instale
git clone https://github.com/YOUR_USERNAME/ticto-ebulicao.git
cd ticto-ebulicao
npm install

# 2. Configure variáveis de ambiente
cp .env.local.example .env.local
# Edite .env.local com suas credenciais Supabase

# 3. Rode o servidor de desenvolvimento
npm run dev
# Acesse http://localhost:3000
```

## 🔑 Variáveis de Ambiente

```
NEXT_PUBLIC_SUPABASE_URL      — URL do projeto Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY — Chave anon pública do Supabase
```

## 📊 Supabase — Tabela `leads`

```sql
create table leads (
  id         uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name       text not null,
  ddd        text,
  email      text not null,
  celular    text,
  sells_online text
);
```

## 🎨 Design

Pixel-perfect implementation of Figma design.
Figma file: [Teste Dev (cópia)](https://www.figma.com/design/ItETjflubGwYdIXyKkht0E/)
