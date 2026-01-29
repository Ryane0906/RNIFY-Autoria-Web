// 🔹 1. ARRAY NO TOPO DO ARQUIVO (FORA DE TUDO)
const artistDataclassic = [
    { name: 'Kate Bush', link: 'katebush.html' },
    { name: 'Jeff Buckley', link: 'jeffbuckley.html' },
    { name: 'Elliott Smith', link: 'elliottsmith.html' },
    { name: 'Queen', link: 'queen.html' },
    { name: 'Michael Jackson', link: 'michaeljackson.html' },
    { name: 'The Smiths', link: 'thesmiths.html' },
    { name: 'Radiohead', link: 'radiohead.html' },
    { name: 'Linkin Park', link: 'linkinpark.html' },
    { name: 'Pink Floyd', link: 'pinkfloyd.html' },
    { name: 'Tame Impala', link: 'tameimpala.html' },
    { name: 'PJ Harvey', link: 'pjharvey.html' },
    { name: 'The Strokes', link: 'thestrokes.html' },
    { name: 'Tori Amos', link: 'toriamoss.html' },
    { name: 'The Beatles', link: 'thebeatles.html' }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('.form-control');
  
    input.addEventListener('input', (event) => {
      const texto = event.target.value.toLowerCase();
  
      const resultado = artistDataclassic.filter(artista =>
        artista.name.toLowerCase().includes(texto)
      );
  
      mostrarResultado(resultado);
    });
  
  });
  function mostrarResultado(lista) {
    const ul = document.getElementById('resultadopesquisa');
    ul.innerHTML = "";
  
    lista.forEach(artista => {
      const li = document.createElement("li");
      li.classList.add("list-group-item", "p-0");
  
      const link = document.createElement("a");
      link.href = artista.link;
      link.textContent = artista.name;
  
      // 🔥 faz o link ocupar tudo
      link.classList.add("d-block", "p-3", "text-decoration-none", "text-dark");
  
      li.appendChild(link);
      ul.appendChild(li);
    });
  }