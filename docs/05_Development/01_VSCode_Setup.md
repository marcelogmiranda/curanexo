# Configuração de Desenvolvimento no VS Code

**Version:** 0.1  
**Project:** CuraNexo  
**Last Updated:** 2026-09-06  
**Status:** Prototype Ready / Development Setup

## Objetivo

Preparar o repositório para que o desenvolvimento e os testes da aplicação sejam realizados no Visual Studio Code, mantendo a fase atual limitada ao protótipo visual.

## Stack de desenvolvimento

- Mobile: Flutter + Dart.
- Backoffice: interface web responsiva; implementação detalhada permanece pendente da fase de produção.
- Banco: Supabase, somente na implementação real.
- Pagamentos: Stripe, somente na implementação real.
- Integrações de prestadores: camada de adapters, somente na implementação real.
- Git: repositório `marcelogmiranda/curanexo`, branch principal `main`.

## Extensões recomendadas

O arquivo `.vscode/extensions.json` registra as extensões recomendadas para Flutter/Dart, qualidade de código, Markdown e Git.

## Configurações incluídas

### `.vscode/settings.json`

- formatação automática ao salvar;
- organização de imports;
- configurações básicas para Dart/Flutter;
- exclusão de diretórios gerados da busca e da árvore de arquivos.

### `.vscode/launch.json`

Configurações preparadas para Debug e Profile do Flutter.

### `.vscode/tasks.json`

Tarefas preparadas para `flutter pub get`, `flutter analyze`, `flutter test` e análise + testes em sequência.

## Fluxo recomendado

```text
Vibe Code
   ↓
Gerar/ajustar protótipo Flutter
   ↓
Abrir repositório no VS Code
   ↓
flutter pub get
   ↓
Executar em Debug
   ↓
Validar telas e fluxos
   ↓
flutter analyze
   ↓
flutter test
   ↓
Commit / Push
```

## Pré-requisitos locais

- VS Code;
- Flutter SDK;
- Dart SDK compatível com o Flutter;
- Git;
- Android Studio/Android SDK para testes Android, se necessário;
- Xcode para testes iOS em macOS, se necessário;
- dispositivo físico ou emulador/simulador.

As versões exatas serão fixadas na fase de construção da aplicação.

## Variáveis de ambiente

Nenhuma credencial real deve entrar no Git. Na implementação real deverá existir um `.env.example` sem valores secretos. Credenciais de Supabase, Stripe e integrações externas deverão ser configuradas no ambiente apropriado.

## Limites desta preparação

Esta configuração não significa que o produto já esteja implementado. Ela prepara o repositório para receber o projeto Flutter gerado pelo Vibe Code e estabelece a rotina inicial de desenvolvimento e testes no VS Code.

Permanecem pendentes para a fase de produção: projeto Flutter definitivo, versões fixadas do SDK, arquitetura de código, testes completos, CI/CD, Supabase, Stripe, integrações de prestadores, segurança/LGPD de produção e observabilidade.

## Documentos Relacionados

- `docs/01_Product/04_PRD.md`
- `docs/02_Architecture/01_ArchitectureOverview.md`
- `docs/02_Architecture/03_ProjectStructure.md`
- `docs/02_Architecture/04_OfflineContingency.md`
- `docs/04_UX_UI/05_Wireframes.md`
- `docs/15_Appendix/05_VibeCode_PrototypePrompt.md`
- `docs/15_Appendix/06_Pendencias_Pos_Prototipo.md`
