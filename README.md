# Amparo na Rua 3 - Terceira Etapa do Projeto Web

## Descrição

Esta é a **terceira etapa** do projeto "Amparo na Rua", desenvolvido na disciplina [nome da disciplina].  
O objetivo desta etapa é adicionar funcionalidades dinâmicas à aplicação utilizando **JavaScript avançado**, transformando a interface estática em uma aplicação interativa.  

Funcionalidades principais:

- Implementação de **Single Page Application (SPA)**.
- Validação de formulários em **tempo real**.
- Máscaras de inputs (CPF, telefone, CEP).
- Controles de mídia (vídeo e áudio).
- Estrutura modular de JavaScript organizada por funcionalidade.


- **index.html**: Página inicial do projeto.  
- **capacitacao.html**: Página com vídeo e áudio de treinamento.  
- **cadastro.html**: Formulário de cadastro com validação e máscaras de input.  
- **projetos.html**: Página com projetos ou conteúdos adicionais.  
- **/js**: Contém todos os arquivos JavaScript, separados por funcionalidade.  
- **/css**: Arquivos de estilos da aplicação.  
- **/imagens**: Todos os arquivos de mídia utilizados no projeto.

---

## Funcionalidades Implementadas

1. **SPA (Single Page Application)**  
   - Carregamento dinâmico do conteúdo sem recarregar a página inteira.  
   - Interceptação de links internos e navegação via `history.pushState`.

2. **Validação de Formulários**  
   - Validação de campos obrigatórios em tempo real (`blur`).  
   - Expressões regulares para e-mail, CPF, telefone e CEP.  
   - Feedback visual para erros (mensagens exibidas próximas aos campos).  
   - Validação de radio buttons e select.

3. **Máscaras de Input**  
   - CPF: `000.000.000-00`  
   - Telefone: `(00) 00000-0000`  
   - CEP: `00000-000`  

4. **Controles de Mídia**  
   - Botões para reproduzir, pausar e reiniciar vídeo e áudio.  
   - Mensagens informativas para os usuários.  

5. **Modularização do JavaScript**  
   - Scripts separados por funcionalidade: `spa.js`, `script.js`, `capacitacao.js`.  
   - Carregamento dinâmico de scripts conforme a página acessada.

---

## Tecnologias Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- DOM Manipulation  
- Fetch API  
- History API (para SPA)

