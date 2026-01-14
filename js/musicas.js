// ALBUNS E ARTISTAS (Ryane de Azevedo Alves)
document.addEventListener('DOMContentLoaded', () => {
const artistDataclassic = [
  {name: 'Kate Bush', Image: './img/artistas/katebush2.jpg', link: 'katebush.html' },
  {name: 'Jeff Buckley', Image: './img/artistas/jeffbuckley2.jpg', link: 'jeffbuckley.html'},
  {name: 'Elliott Smith', Image: './img/artistas/elliottsmith.jpg', link: 'elliottsmith.html'},
  {name: 'Queen', Image: './img/artistas/queen2.jpg', link: 'queen.html'},
  {name: 'Michael Jackson', Image: './img/artistas/michaeljackson2.jpg', link: 'michaeljackson.html'},
  {name: 'The Smiths', Image: './img/artistas/thesmiths.jpg', link: 'thesmiths.html'},
  {name: 'Radiohead', Image: './img/artistas/radiohead.jpg', link: 'radiohead.html'},
  {name: 'Linkin Park', Image: './img/artistas/linkinpark.jpg', link: 'linkinpark.html'},
  {name: 'Pink Floyd', Image: './img/artistas/pinkfloyd.jpg', link: 'pinkfloyd.html'},
  {name: 'Tame Impala', Image: './img/artistas/tameimpala.jpg', link: 'tameimpala.html'}
];


const albumsDataclassic = [
    { name: 'Stories From The City, Stories From The Sea', artist: 'Pj Harvey', Image: './img/albuns/pjharveystories.jpg', link:'storiesfromthecityalbum.html'},
    { name: 'The Colour And The Shape', artist: 'Foo Fighters', Image: './img/albuns/foofighterscolornshape.jpg', link:'thecolourandtheshapealbum.html'},
    { name: 'Use Your Illusion I', artist: 'Guns N Roses', Image: './img/albuns/gnraillusion.jpg', link:'useryoutillusioni.html'},
    { name: 'Blur', artist: 'Blur', Image: './img/albuns/blur.jpg', link:'Bluralbum.html'},
    { name: 'The Queen Is Dead', artist: 'The Smiths', Image: './img/albuns/thesmithsqueen.jpg', link:'thequeenisdead.html'},
    { name: 'Grace', artist: 'Jeff Buckley', Image: './img/albuns/jeffbuckleygrace.jpg', link:''},
    { name: 'In Rainbows', artist: 'Radiohead', Image: './img/radiohead/inrainbows.jpg', link:'inrainbows.html'},
    { name: 'Meteora', artist: 'Linkin Park', Image: './img/albuns/linkinparkmeteora.jpg', link:'meteora.html'},
    { name: 'The Bends', artist: 'Radiohead', Image: './img/albuns/radioheadthebends.jpg', link:'thebends.html'},
    
];


 const artistGridclassic = document.querySelector('.artist-gridclassic')
 const albumsGridclassic = document.querySelector('.albums-gridclassic')


if (artistGridclassic) {
        artistDataclassic.forEach( artist => {
                const artistCardclassic = document.createElement('div')
                artistCardclassic.classList.add('artist-cardclassic')

                artistCardclassic.innerHTML = `
                <a href="${artist.link}">
                 <img src="${artist.Image}" alt= "imagem do ${artist.name}">
                 <div>
                     <h3>${artist.name}</h3>
                     <p>Artista</p>
                 </div>
                 </a>
                `

                artistGridclassic.appendChild(artistCardclassic)
        })
}

if (albumsGridclassic) {
        albumsDataclassic.forEach( albums => {
                const albumsCardclassic = document.createElement('div')
                albumsCardclassic.classList.add('albums-cardclassic')

                albumsCardclassic.innerHTML = `
                 <a href="${albums.link}">
                 <img src="${albums.Image}" alt= "imagem do ${albums.name}">
                 <div>
                 <h3>${albums.name}</h3>
                 <p>${albums.artist}</p>
                 </div>
                `
                albumsGridclassic.appendChild(albumsCardclassic)
        })
}
})

document.addEventListener('DOMContentLoaded', () => {
const artistDatampb = [
  {name: 'Chico Buarque', Image: './img/artistas/chicobuarque.jpg'},
  {name: 'Djavan', Image: './img/artistas/djavan.jpg'},
  {name: 'Raul Seixas', Image: './img/artistas/raulseixas.jpg'},
  {name: 'Adoniran Barbosa', Image: './img/artistas/adoniranbarbosa.jpg'},
  {name: 'Ney Matogrosso', Image: './img/artistas/neymatogrosso.jpg'},
  {name: 'Angela Ro Ro', Image: './img/artistas/angelaroro.jpg'},
  {name: 'Belchior', Image: './img/artistas/belchior.jpg'},
  {name: 'Rita Lee', Image: './img/artistas/ritalee.jpg'},
  {name: 'Caetano Veloso', Image: './img/artistas/caetanoveloso.jpg'}
];


const albumsDatampb = [
    { name: '2 É Demais', artist: 'Elis Regina', Image: './img/albuns/2edemais.jpg'},
    { name: 'Rita Lee', artist: 'Rita Lee', Image: './img/albuns/ritalee.jpg'},
    { name: 'O Que Você Quer Saber de Verdade', artist: 'Marisa Monte', Image: './img/albuns/oquevocequersaber.jpg'},
    { name: 'Ideologia', artist: 'Cazuza', Image: './img/albuns/ideologia.jpg'},
    { name: 'Falso Brilhante', artist: 'Elis Regina', Image: './img/albuns/falsobrilhante.jpg'},
    { name: 'Construção', artist: 'Chico Buarque', Image: './img/albuns/construcao.jpg'},
    { name: 'Me Chama de Gato Que Eu Sou Sua', artist: 'Ana Frango Elétrico', Image: './img/albuns/mechamadegato.jpg'},
    { name: 'A Tábua De Esmeralda', artist: 'Jorge Ben Jor', Image: './img/albuns/tabuaesmeralda.jpg'},
    { name: 'Revoluções Por Minuto', artist: 'RPM', Image: './img/albuns/revolucoesporminuto.jpg'}
];


 const artistGridmpb = document.querySelector('.artist-gridmpb')
 const albumsGridmpb = document.querySelector('.albums-gridmpb')

if (artistGridmpb) {
        artistDatampb.forEach( artist => {
                const artistCardmpb = document.createElement('div')
                artistCardmpb.classList.add('artist-cardmpb')

                artistCardmpb.innerHTML = `
                 <img src="${artist.Image}" alt= "imagem do ${artist.name}">
                 <div>
                     <h3>${artist.name}</h3>
                     <p>Artista</p>
                 </div>
                `

                artistGridmpb.appendChild(artistCardmpb)
        })
}

if (albumsGridmpb) {
        albumsDatampb.forEach( albums => {
                const albumsCardmpb = document.createElement('div')
                albumsCardmpb.classList.add('albums-cardmpb')

                albumsCardmpb.innerHTML = `
                 <img src="${albums.Image}" alt= "imagem do ${albums.name}">
                 <div>
                 <h3>${albums.name}</h3>
                 <p>${albums.artist}</p>
                 </div>
                `
                albumsGridmpb.appendChild(albumsCardmpb)
        })
}
})


 //TOP 5 LINKIN PARK

const linkin5 = [ 
    {name: 'In The End', Image: './img/linkinpark/hybridtheory.jpg', audio: './musicas/intheend.mp3'}, 
    {name: 'Numb', Image: './img/linkinpark/meteora.jpg', audio: './musicas/numb.mp3'}, 
    {name: 'Somewhere I Belong', Image: './img/linkinpark/meteora.jpg', audio: './musicas/somewhereibelong.mp3'}, 
    {name: 'Faint', Image: './img/linkinpark/meteora.jpg', audio: './musicas/faint.mp3'}, 
    {name: 'Heavy Is The Crown', Image: './img/linkinpark/fromzero.jpg', audio: './musicas/heavyisthecrown.mp3'}
];

const list = document.querySelector(".music-linkinpark");

if (list) {
    linkin5.forEach((musica, i) => {
        const tr = document.createElement("tr");
        tr.classList.add("music-item"); 
        tr.dataset.audio = musica.audio;
        tr.style.cursor = "pointer";

        tr.innerHTML = `
        <td>
        <img src="${musica.Image}" alt="Imagem da música ${musica.name}"> <span>${musica.name}</span>
        </td>
        `;

        list.appendChild(tr);
    });
}


// DISCOGRAFIA LINKINPARK

document.addEventListener('DOMContentLoaded', () => {
const albumsData = [
    { name: 'Meteora', Image: './img/linkinpark/meteora.jpg', year: 2003},
    { name: 'Reanimation', Image: './img/linkinpark/reanimation.jpg', year: 2002}, 
    { name: 'A Thousand Suns', Image: './img/linkinpark/athousandsuns.jpg', year: 2010},
    { name: 'Hybrid Theory', Image: './img/linkinpark/hybridtheory.jpg', year: 2000},
    { name: 'One More Light', Image: './img/linkinpark/onemorelight.jpg', year: 2017},
    { name: 'Minutes To Midnight', Image: './img/linkinpark/minutestomidnight.jpg', year: 2007},
    { name: 'From Zero', Image: './img/linkinpark/fromzero.jpg', year: 2024},
    { name: 'Living Things', Image: './img/linkinpark/livingthings.jpg', year: 2012},
];


 const albumsGridlinkin = document.querySelector('.albums-gridlinkin')

if (albumsGridlinkin) {
    albumsData.forEach(albums => {
        const albumsCardlinkin = document.createElement('div')
        albumsCardlinkin.classList.add('albums-cardlinkin')

        albumsCardlinkin.innerHTML = `
        <img src="${albums.Image}" alt= "Álbum ${albums.name}">
        <div>
            <h3>${albums.name}</h3>
            <p>${albums.year}</p>
        </div>
        `
        albumsGridlinkin.appendChild(albumsCardlinkin)

    })
}
})


//TOP 5 RADIOHEAD

document.addEventListener('DOMContentLoaded', () => {
const radio5 = [ 
    {name: 'Creep', Image: './img/radiohead/pablohoney.jpg', audio: './musicas/creep.mp3', time: '3:36'}, 
    {name: 'Street Spirit (Fade Out)', Image: './img/radiohead/thebends.jpg', audio: './musicas/streetspirit.mp3', time: '6:23'}, 
    {name: 'All I Need', Image: './img/radiohead/inrainbows.jpg', audio: './musicas/allineed.mp3', time: '3:49'}, 
    {name: 'Weird fishes/Arpeggi', Image: './img/radiohead/inrainbows.jpg', audio: './musicas/weirdfishes.mp3', time: '4:13'}, 
    {name: '15 Steps', Image: './img/radiohead/inrainbows.jpg', audio: './musicas/15steps.mp3', time: '3:56'}
];

const listRadio = document.querySelector(".music-radiohead");

radio5.forEach((musica, i) => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-radiohead"); 
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
    <td>
    <img src="${musica.Image}" alt="Imagem da música ${musica.name}"> <span>${musica.name}</span>
    </td>
    `;

    if (listRadio) listRadio.appendChild(tr);
});
});

// DISCOGRAFIA RADIOHEAD

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Ok Computer', Image: './img/radiohead/okcomputer.jpg', year: 1997},
    { name: 'Pablo Honey', Image: './img/radiohead/pablohoney.jpg', year: 1993}, 
    { name: 'The Bends', Image: './img/radiohead/thebends.jpg', year: 1995},
    { name: 'In Rainbows', Image: './img/radiohead/inrainbows.jpg', year: 2007},
    { name: 'Kid A', Image: './img/radiohead/kida.jpg', year: 2000},
    { name: 'Amnesiac', Image: './img/radiohead/amnesiac.jpg', year: 2001},
    { name: 'Hail to the Thief', Image: './img/radiohead/hailtothethief.jpg', year: 2003},
    { name: 'Ok Computer OKNOTOK', Image: './img/radiohead/okcomputeroknotok.jpg', year: 2017},
  ];

  const albumsGridradiohead = document.querySelector('.albums-gridradiohead');

  if (albumsGridradiohead) {
    albumsData.forEach(albums => {
      const albumsCardradiohead = document.createElement('div');
      albumsCardradiohead.classList.add('albums-cardradiohead');

      albumsCardradiohead.innerHTML = `
        <img src="${albums.Image}" alt="Álbum ${albums.name}">
        <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
        </div>
      `;
      albumsGridradiohead.appendChild(albumsCardradiohead);
    });
  }
});

//TOP 5 KATE BUSH

document.addEventListener('DOMContentLoaded', () => {
    const katebush5 = [ 
    {name: 'Running Up That Hill', Image: './img/katebush/houndsoflove.jpg', audio: './musicas/runningupthathill.mp3'}, 
    {name: 'Hounds of Love', Image: './img/katebush/houndsoflove.jpg', audio: './musicas/houndsoflove.mp3'}, 
    {name: 'Jig Of Life', Image: './img/katebush/houndsoflove.jpg', audio: './musicas/jigoflife.mp3'}, 
    {name: 'Babooshka', Image: './img/katebush/neverforever.jpg', audio: './musicas/babooshka.mp3'}, 
    {name: 'Wuthering Heights', Image: './img/katebush/thekickinside.jpg', audio: './musicas/wutheringheigths.mp3'}
];

const listkatebush = document.querySelector(".music-katebush");

katebush5.forEach((musica, i) => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-katebush"); 
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
    <td>
    <img src="${musica.Image}" alt="Imagem da música ${musica.name}"> <span>${musica.name}</span>
    </td>
    `;

    if (listkatebush) listkatebush.appendChild(tr);
});
});

// DISCOGRAFIA KATE BUSH

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Hounds of Love', Image: './img/katebush/houndsoflove.jpg', year: 1997},
    { name: 'The Sensual World', Image: './img/katebush/thesensualworld.jpg', year: 1993}, 
    { name: 'The Kick Inside', Image: './img/katebush/thekickinside.jpg', year: 1987},
    { name: 'Never For ever', Image: './img/katebush/neverforever.jpg', year: 1991},
    { name: 'Lion Heart', Image: './img/katebush/lionheart.jpg', year: 1995 },
    { name: 'The Dreaming', Image: './img/katebush/thedreaming.jpg', year: 2001},
    { name: 'The Red Shoes', Image: './img/katebush/theredshoes.jpg', year: 2003}
  ];

  const albumsGridkatebush = document.querySelector('.albums-gridkatebush');

  if (albumsGridkatebush) {
    albumsData.forEach(albums => {
      const albumsCardkatebush = document.createElement('div');
      albumsCardkatebush.classList.add('albums-cardkatebush');

      albumsCardkatebush.innerHTML = `
        <img src="${albums.Image}" alt="Álbum ${albums.name}">
        <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
        </div>
      `;
      albumsGridkatebush.appendChild(albumsCardkatebush);
    });
  }
});

// TOP 5 ELLIOTT SMITH


document.addEventListener('DOMContentLoaded', () => {
  elliott5 = [
    { name: 'Clementine', Image: './img/katebush/houndsoflove.jpg', audio: './musicas/clementine.mp3'},
    { name: 'Son of Sam', Image: './img/katebush/thesensualworld.jpg', audio: './musicas/sonofsam.mp3'}, 
    { name: 'Somebody That I Used To Know', Image: './img/katebush/thekickinside.jpg', audio: './musicas/somebodythatiusedtoknowelliott.mp3'},
    { name: 'Say Yes', Image: './img/katebush/neverforever.jpg', audio: './musicas/sayyes.mp3'},
    { name: 'Better Be Quiet Now', Image: './img/katebush/lionheart.jpg', audio: './musicas/betterbequietnow.mp3' },
];

const listelliott = document.querySelector(".music-elliott");

elliott5.forEach((musica, i) => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-elliott"); 
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
    <td>
    <img src="${musica.Image}" alt="Imagem da música ${musica.name}"> <span>${musica.name}</span>
    </td>
    `;

    if (listelliott) listelliott.appendChild(tr);
});
});

// DISCOGRAFIA ELLIOTT SMITH

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: '?????', Image: './img/katebush/houndsoflove.jpg', year: 1997},
    { name: '?????', Image: './img/katebush/thesensualworld.jpg', year: 1993}, 
    { name: '?????', Image: './img/katebush/thekickinside.jpg', year: 1987},
    { name: '?????', Image: './img/katebush/neverforever.jpg', year: 1991},
    { name: '?????', Image: './img/katebush/lionheart.jpg', year: 1995 },
    { name: '?????', Image: './img/katebush/thedreaming.jpg', year: 2001},
    { name: '?????', Image: './img/katebush/theredshoes.jpg', year: 2003}
  ];

  const albumsGridelliott = document.querySelector('.albums-gridelliott');

  if (albumsGridelliott) {
    albumsData.forEach(albums => {
      const albumsCardelliott = document.createElement('div');
      albumsCardelliott.classList.add('albums-cardelliott');

      albumsCardelliott.innerHTML = `
        <img src="${albums.Image}" alt="Álbum ${albums.name}">
        <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
        </div>
      `;
      albumsGridelliott.appendChild(albumsCardelliott);
    });
  }
});

// Album meteora - Linkin Park

document.addEventListener('DOMContentLoaded', () => {
  const meteora = [
    { name: 'Foreword', audio: './musicas/foreword.mp3', time: '0:13' },
    { name: "Don't Stay", audio: './musicas/dontstay.mp3', time: '3:07' },
    { name: 'Somewhere I Belong', audio: './musicas/somewhereibelong.mp3', time: '3:33' },
    { name: 'Lying From You', audio: './musicas/lyingfromyou.mp3', time: '2:55' },
    { name: 'Hit the Floor', audio: './musicas/hitthefloor.mp3', time: '2:44' },
    { name: 'Easier to Run', audio: './musicas/easiertorun.mp3', time: '3:24' },
    { name: 'Faint', audio: './musicas/faint.mp3', time: '2:42' },
    { name: 'Figure.09', audio: './musicas/figure09.mp3', time: '3:17' },
    { name: 'Breaking the Habit', audio: './musicas/breakingthehabit.mp3', time: '3:16' },
    { name: 'From the Inside', audio: './musicas/fromtheinside.mp3', time: '2:55' },
    { name: "Nobody's Listening", audio: './musicas/nobodyslistening.mp3', time: '3:00' },
    { name: 'Session', audio: './musicas/session.mp3', time: '2:23' },
    { name: 'Numb', audio: './musicas/numb.mp3', time: '3:07' }
  ];

  const listMeteora = document.querySelector(".music-meteora");

  meteora.forEach((musica) => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-meteora");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
        <span>${musica.name}</span>
      </td>
    `;

    if (listMeteora) listMeteora.appendChild(tr);
  });
});

// PLAYER DE MÚSICAS (GIT HUB Copilot)
let audio = new Audio();
let tocando = false;

// ===============================
// ELEMENTOS DE CONTROLE
// ===============================

// botão play do álbum (header)
const topPlayerBtn = document.querySelector('.album-play');
const topPlayerIcon = topPlayerBtn
  ? topPlayerBtn.querySelector('i')
  : null;

// bottom player
const bottomPlayerWrap = document.querySelector('.icon-playerbottomnav');
const bottomPlayIcon = bottomPlayerWrap
  ? bottomPlayerWrap.querySelector(
      '.bottombav-icons i.fa-circle-play, .bottombav-icons i.fa-circle-pause'
    )
  : null;

// ===============================
// ATUALIZAR ÍCONES
// ===============================

function updatePlayIcons(playing) {
  // header (álbum)
  if (topPlayerIcon) {
    if (playing) {
      topPlayerIcon.classList.replace('fa-play', 'fa-pause');
    } else {
      topPlayerIcon.classList.replace('fa-pause', 'fa-play');
    }
  }

  // bottom player
  if (bottomPlayIcon) {
    if (playing) {
      bottomPlayIcon.classList.replace('fa-circle-play', 'fa-circle-pause');
    } else {
      bottomPlayIcon.classList.replace('fa-circle-pause', 'fa-circle-play');
    }
  }
}

// ===============================
// PLAY / PAUSE
// ===============================

function togglePlay() {
  if (audio.paused) {
    audio.play();
    tocando = true;
    updatePlayIcons(true);
  } else {
    audio.pause();
    tocando = false;
    updatePlayIcons(false);
  }
}

// ===============================
// CLIQUE NAS MÚSICAS
// ===============================

document.addEventListener('click', e => {
  const tr = e.target.closest('.music-item');
  if (!tr) return;

  const novoAudio = tr.dataset.audio;

  if (audio.src !== novoAudio) {
    audio.src = novoAudio;
    audio.play();
    tocando = true;
    updatePlayIcons(true);
  } else {
    togglePlay();
  }
});

// ===============================
// BOTÃO PLAY DO ÁLBUM
// ===============================

if (topPlayerBtn) {
  topPlayerBtn.addEventListener('click', togglePlay);
}

// ===============================
// CONTROLES DO BOTTOM PLAYER
// ===============================

if (bottomPlayerWrap) {
  bottomPlayerWrap.addEventListener('click', (e) => {
    const target = e.target;

    if (
      target.closest('.fa-circle-play') ||
      target.closest('.fa-circle-pause')
    ) {
      togglePlay();
      return;
    }

    if (target.closest('.fa-backward-step')) {
      audio.currentTime = Math.max(0, (audio.currentTime || 0) - 10);
      return;
    }

    if (target.closest('.fa-forward-step')) {
      audio.currentTime = Math.min(
        audio.duration || Infinity,
        (audio.currentTime || 0) + 10
      );
    }
  });
}

// ===============================
// BARRA DE PROGRESSO
// ===============================

const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
}

audio.addEventListener('timeupdate', () => {
  if (!audio.duration) return;

  const percent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = percent + '%';

  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  audio.currentTime = (clickX / width) * audio.duration;
});

let isDragging = false;

progressContainer.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging || !audio.duration) return;

  const rect = progressContainer.getBoundingClientRect();
  let offsetX = e.clientX - rect.left;

  offsetX = Math.max(0, Math.min(offsetX, rect.width));

  progress.style.width = (offsetX / rect.width) * 100 + '%';
  audio.currentTime = (offsetX / rect.width) * audio.duration;
});
