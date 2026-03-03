# Relatório curto de qualidade

## Escopo
- Compatibilidade Safari-like (WebKit desktop + iOS)
- Fluxos críticos da landing page

## Metodologia (resumo)
- Abordagem: smoke E2E focado em comportamento do usuário
- Ambiente: Playwright (`webkit` e `webkit-ios`)
- Critério: passar lint, tipos e testes sem falhas

## Checklist de qualidade
- `npm run lint` ✅
- `npx tsc --noEmit` ✅
- `npm run test:safari:all` ✅

## Cobertura dos testes
- Renderização do Hero + formulário
- Máscaras de CPF e celular
- Comportamento do bloco sticky (desktop vs iOS)
- Validação nativa de campos obrigatórios
- Screenshot automático para comparação rápida

## Evidências
- `artifacts/safari-snapshots/webkit-home.png`
- `artifacts/safari-snapshots/webkit-ios-home.png`

## Resultado final
A suíte Safari-like está estável no estado atual: 8/8 testes passando.
