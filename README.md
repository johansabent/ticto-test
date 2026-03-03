# Ticto × Ebulição — Landing Page

Landing page promocional para captação de leads do evento Ebulição × Ticto.

## Deploy

- Produção: [https://ticto-test-indol.vercel.app/](https://ticto-test-indol.vercel.app/?_vercel_share=HTqm34ADXjzJm0DTdinQfdS4MPp5TK47)

## Resumo Executivo (avaliador)

- Metodologia: smoke E2E em WebKit (Safari desktop + iOS)
- Qualidade: `npm run lint` + `npx tsc --noEmit` aprovados
- Testes Safari: `npm run test:safari:all` com 8/8 passando
- Evidências visuais: `artifacts/safari-snapshots/`
- Relatório curto: [docs/quality-report.md](docs/quality-report.md)

## Rodar local

```bash
npm install
npm run dev
```

## Ambiente

```bash
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

## Testes principais

```bash
npm run lint
npx tsc --noEmit
npm run test:safari:all
```

## Referências

- [docs/quality-report.md](docs/quality-report.md)
- [docs/toolsets.md](docs/toolsets.md)
