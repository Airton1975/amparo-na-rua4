document.addEventListener("DOMContentLoaded", () => {
  const conteudo = document.getElementById("conteudo");

  function interceptarLinks() {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      link.removeEventListener("click", linkHandler);
      link.addEventListener("click", linkHandler);
    });
  }

  function linkHandler(e) {
    const href = e.currentTarget.getAttribute("href");
    if (href.startsWith("http") || href.startsWith("#")) return;

    e.preventDefault();
    const pagina = href.replace(".html", "");
    carregarPagina(pagina);
  }

  async function carregarPagina(pagina) {
    try {
      let url = `${pagina}.html`;
      if (pagina === "inicio") url = "index.html";

      const response = await fetch(url);
      if (!response.ok) throw new Error("Página não encontrada");

      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const mainContent = doc.querySelector("main");
      if (!mainContent) throw new Error("Conteúdo principal não encontrado");

      conteudo.innerHTML = mainContent.innerHTML;
      history.pushState({ page: pagina }, "", `#${pagina}`);
      interceptarLinks();

      carregarScripts(pagina);
    } catch (error) {
      conteudo.innerHTML = `<p style="color:red;">Erro ao carregar a página: ${error.message}</p>`;
    }
  }

  function carregarScripts(pagina) {
    const scriptExistente = document.getElementById("scriptPagina");
    if (scriptExistente) scriptExistente.remove();

    const scripts = {
      projetos: "js/script.js",
      capacitacao: "js/capacitacao.js",
      cadastro: "js/script.js"
    };

    if (scripts[pagina]) {
      const script = document.createElement("script");
      script.src = scripts[pagina];
      script.id = "scriptPagina";
      script.defer = true;
      script.onload = () => {
        if (pagina === "capacitacao" && typeof initCapacitacao === "function") initCapacitacao();
        if (pagina === "cadastro" && typeof initCadastro === "function") initCadastro();
      };
      document.body.appendChild(script);
    }
  }

  const menuLinks = document.querySelectorAll('nav a[data-page]');
  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const pagina = link.getAttribute("data-page");
      carregarPagina(pagina);
    });
  });

  window.addEventListener("popstate", e => {
    const pagina = e.state ? e.state.page : "inicio";
    carregarPagina(pagina);
  });

  interceptarLinks();
  const paginaInicial = location.hash.replace("#", "") || "inicio";
  carregarPagina(paginaInicial);
});

// 🔁 Alternância de Modo Escuro e Alto Contraste
const botaoEscuro = document.getElementById("toggle-dark");
const botaoContraste = document.getElementById("toggle-contrast");
const botaoReset = document.getElementById("reset-mode");

botaoEscuro?.addEventListener("click", () => {
  const body = document.body;
  const ativo = body.classList.contains("dark-mode");

  body.classList.remove("high-contrast");
  body.classList.toggle("dark-mode");

  botaoEscuro.textContent = ativo ? "Modo Escuro" : "Modo Normal";
  botaoContraste.textContent = "Alto Contraste";
});

botaoContraste?.addEventListener("click", () => {
  const body = document.body;
  const ativo = body.classList.contains("high-contrast");

  body.classList.remove("dark-mode");
  body.classList.toggle("high-contrast");

  botaoContraste.textContent = ativo ? "Alto Contraste" : "Modo Normal";
  botaoEscuro.textContent = "Modo Escuro";
});

botaoReset?.addEventListener("click", () => {
  document.body.classList.remove("dark-mode", "high-contrast");
  botaoEscuro.textContent = "Modo Escuro";
  botaoContraste.textContent = "Alto Contraste";
});