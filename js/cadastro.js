const form = document.getElementById("cadastroForm");
console.log("Form encontrado:", form);

form.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log("Botão cadastrar clicado");

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    console.log(nome, email, senha);

    const usuario = { nome, email, senha };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("logado", "true");

    window.location.href = "perfil.html";
});