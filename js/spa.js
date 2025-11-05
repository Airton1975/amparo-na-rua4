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
        // Inicializa funções específicas da página
        if (pagina === "capacitacao" && typeof initCapacitacao === "function") initCapacitacao();
        if (pagina === "cadastro" && typeof initCadastro === "function") initCadastro();
      };
      document.body.appendChild(script);
    }
  }

  // Inicializa interceptação do menu principal
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
