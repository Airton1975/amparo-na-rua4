# 🏠 Amparo na Rua — Entrega IV

Projeto final da disciplina, consolidando práticas profissionais de desenvolvimento web com foco em acessibilidade, versionamento e otimização para produção.

---

## 📌 Descrição do Projeto

O site da ONG **Amparo na Rua** tem como objetivo promover acolhimento, capacitação e reinserção social de pessoas em situação de rua. Esta entrega final reúne HTML, CSS, JavaScript, acessibilidade WCAG 2.1 AA e técnicas de otimização para produção.

---

## 🧩 Tecnologias Utilizadas

- HTML5
- CSS3 (minificado com [CleanCSS](https://www.cleancss.com/css-minify/))
- JavaScript (minificado com [JavaScript Minifier](https://javascript-minifier.com/))
- Git e GitHub

---

## ♿ Acessibilidade (WCAG 2.1 Nível AA)

- ✅ Navegação por teclado em todos os componentes
- ✅ Estrutura semântica com uso de `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- ✅ Contraste mínimo de 4.5:1 para texto normal
- ✅ Suporte completo para leitores de tela (`aria-label`, `role`, `alt`)
- ✅ Modo escuro e alto contraste acessível com botões de controle

---

## 🚀 Otimização para Produção

- CSS minificado: `style.min.css`
- JavaScript minificado: `spa.min.js`, `script.min.js`, `capacitacao.min.js`
- HTML validado e limpo
- Imagens comprimidas com [TinyPNG](https://tinypng.com/)
- Arquivos originais mantidos para edição futura

---

## 🔀 Versionamento com GitFlow

- Branches utilizadas:
  - `main` — versão final de produção
  - `develop` — desenvolvimento contínuo
  - `feature/acessibilidade` — implementação de acessibilidade
  - `release/v1.0.0` — preparação da entrega final

- Commits semânticos:
  - `feat: adiciona modo escuro acessível`
  - `fix: corrige contraste de texto`
  - `docs: atualiza README com instruções de deploy`

- Pull Requests documentados
- Issues e milestones utilizados para planejamento
