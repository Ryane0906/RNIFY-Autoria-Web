const input =
    document.querySelector('.form-control');

    input.addEventListener('input', (event) => {
        const value = event.target.value;

        const texto = input.value.toLowerCase();

        const resultado = 
        artistas.filter(artista =>
            
            artista.toLowerCase().includes(texto)
            );

            mostrarResultado(resultado);
    });

function mostrarResultado(lista) {
    const ul =
    document.getElementById("resultadopesquisa");
    ul.innerHTML = "";

    lista.forEach(item => {
        const li =
        document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}