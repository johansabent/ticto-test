# Ticto × Ebulição — Landing Page

Landing page promocional para o evento Ebulição por Rafa Prado × Ticto.
Permite cadastro de participantes para concorrer a um iPhone 16 Pro.

## 🚀 Deploy

**Produção:** [https://ticto-test-indol.vercel.app/](https://ticto-test-indol.vercel.app/?_vercel_share=HTqm34ADXjzJm0DTdinQfdS4MPp5TK47)

## 🛠️ Tech Stack

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| Next.js | 16.1.6 | App Router, SSR/SSG |
| React | 19 | UI components |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Design tokens, utility classes |
| Supabase JS | 2 | Backend-as-a-Service (tabela de leads) |
| canvas-confetti | 1.9 | Efeito especial após formulário |
| Vercel | — | Deploy e CDN |

## 📐 Arquitetura

- `src/app/` — Next.js App Router (layout, page, globals.css)
- `src/components/` — Componentes Client + Server (Hero, Rules, SignupForm, Footer)
- `src/lib/supabase.ts` — Singleton de conexão ao banco
- `public/images/` — Assets exportados do Figma

## 🏃 Setup Local

```bash
# 1. Clone e instale as dependências
git clone https://github.com/johansabent/ticto-test.git
cd ticto-test
npm install

# 2. Configure as variáveis de ambiente
cp .env.local.example .env.local
# Adicione suas chaves do Supabase no arquivo .env.local

# 3. Inicie o servidor local
npm run dev
# Acesse http://localhost:3000
```

## 🔑 Variáveis de Ambiente Necessárias

```bash
NEXT_PUBLIC_SUPABASE_URL      # URL do seu banco Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY # Chave anon (pública)
```

## 📊 Supabase — Schema da Tabela `leads`

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

Layout focado no Pixel-Perfect a partir do modelo base.

## 📚 Documentação Interna

- [Toolsets operacionais](docs/toolsets.md)
- [Regras globais do agente](.agent/rules/GEMINI.md)
- [Arquitetura do Antigravity Kit](.agent/ARCHITECTURE.md)
