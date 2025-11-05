function initCadastro() {
  console.log("script.js - cadastro inicializado");

  const form = document.getElementById("formCadastro");
  if (!form) return;

  const successMessage = document.getElementById("successMessage");
  const radioError = document.getElementById("radioError");

  const campos = {
    nome: document.getElementById("nome"),
    email: document.getElementById("email"),
    cpf: document.getElementById("cpf"),
    telefone: document.getElementById("telefone"),
    nascimento: document.getElementById("nascimento"),
    endereco: document.getElementById("endereco"),
    cep: document.getElementById("cep"),
    cidade: document.getElementById("cidade"),
    estado: document.getElementById("estado"),
    tipo_colaboracao: document.getElementsByName("tipo_colaboracao")
  };

  const regex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    telefone: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
    cep: /^\d{5}-\d{3}$/
  };

  function showError(input, message) {
    let errorDiv = input.parentElement.querySelector(".error-message");
    if (!errorDiv) {
      errorDiv = document.createElement("div");
      errorDiv.classList.add("error-message");
      errorDiv.style.color = "red";
      errorDiv.style.fontSize = "0.9em";
      input.parentElement.appendChild(errorDiv);
    }
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
  }

  function removeError(input) {
    const errorDiv = input.parentElement.querySelector(".error-message");
    if (errorDiv) errorDiv.style.display = "none";
  }

  function showSuccessMessage() {
    successMessage.style.display = "block";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }

  function validarCampo(input) {
    const value = input.value.trim();
    switch (input.id) {
      case "nome":
        if (!value) { showError(input, "Preencha o nome completo."); return false; }
        break;
      case "email":
        if (!regex.email.test(value)) { showError(input, "E-mail inválido."); return false; }
        break;
      case "cpf":
        if (!regex.cpf.test(value)) { showError(input, "CPF inválido."); return false; }
        break;
      case "telefone":
        if (!regex.telefone.test(value)) { showError(input, "Telefone inválido."); return false; }
        break;
      case "nascimento":
        if (!value) { showError(input, "Data de nascimento obrigatória."); return false; }
        break;
      case "endereco":
        if (!value) { showError(input, "Endereço obrigatório."); return false; }
        break;
      case "cep":
        if (!regex.cep.test(value)) { showError(input, "CEP inválido."); return false; }
        break;
      case "cidade":
        if (!value) { showError(input, "Cidade obrigatória."); return false; }
        break;
      case "estado":
        if (!value) { showError(input, "Selecione o estado."); return false; }
        break;
    }
    removeError(input);
    return true;
  }

  // Máscaras
  const cpfInput = document.getElementById("cpf");
  cpfInput?.addEventListener("input", () => {
    let valor = cpfInput.value.replace(/\D/g, '');
    if (valor.length <= 11) {
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
      valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    cpfInput.value = valor;
  });

  const telefoneInput = document.getElementById("telefone");
  telefoneInput?.addEventListener("input", () => {
    let valor = telefoneInput.value.replace(/\D/g, '');
    if (valor.length <= 11) {
      valor = valor.replace(/^(\d{2})(\d)/, '($1) $2');
      valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    }
    telefoneInput.value = valor;
  });

  const cepInput = document.getElementById("cep");
  cepInput?.addEventListener("input", () => {
    let valor = cepInput.value.replace(/\D/g, '');
    if (valor.length <= 8) {
      valor = valor.replace(/^(\d{5})(\d)/, '$1-$2');
    }
    cepInput.value = valor;
  });

  // Validação no blur
  Object.values(campos).forEach(c => {
    if (!c) return;
    if (c.tagName === "INPUT" || c.tagName === "SELECT") {
      c.addEventListener("blur", () => validarCampo(c));
    }
  });

  // Submit
  form.addEventListener("submit", e => {
    e.preventDefault();
    let valido = true;

    Object.values(campos).forEach(c => {
      if (!c) return;
      if (c.tagName === "INPUT" || c.tagName === "SELECT") {
        if (!validarCampo(c)) valido = false;
      }
    });

    const tipoSelecionado = Array.from(campos.tipo_colaboracao).some(r => r.checked);
    if (!tipoSelecionado) {
      radioError.textContent = "Selecione uma forma de colaboração.";
      radioError.style.display = "block";
      valido = false;
    } else {
      radioError.style.display = "none";
    }

    if (!valido) return;

    showSuccessMessage();
    form.reset();
  });
}
