document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) {
    document.getElementById("msg").innerText = "Nenhum usuário cadastrado.";
    return;
  }

  if (email === usuario.email && senha === usuario.senha) {
    localStorage.setItem("logado", "true");
    window.location.href = "perfil.html";
  } else {
    document.getElementById("msg").innerText = "E-mail ou senha incorretos.";
  }
});