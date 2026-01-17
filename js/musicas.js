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
  {name: 'Tame Impala', Image: './img/artistas/tameimpala.jpg', link: 'tameimpala.html'},
  {name: 'The beatles', Image: './img/artistas/thebeatles.jpg', link: 'thebeatles.html'}
];


const albumsDataclassic = [
    { name: 'Stories From The City, Stories From The Sea', artist: 'Pj Harvey', Image: './img/albuns/pjharveystories.jpg', link:'storiespjharvey.html'},
    { name: 'The Colour And The Shape', artist: 'Foo Fighters', Image: './img/albuns/foofighterscolornshape.jpg', link:'thecolourandtheshapealbum.html'},
    { name: 'Use Your Illusion I', artist: 'Guns N Roses', Image: './img/albuns/gnraillusion.jpg', link:'useryourillusioni.html'},
    { name: 'Blur', artist: 'Blur', Image: './img/albuns/blur.jpg', link:'bluralbum.html'},
    { name: 'The Queen Is Dead', artist: 'The Smiths', Image: './img/albuns/thequeen.jpg', link:'thequeenisdead.html'},
    { name: 'Grace', artist: 'Jeff Buckley', Image: './img/albuns/jeffbuckleygrace.jpg', link:'grace.html'},
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
    { name: 'Meteora', Image: './img/linkinpark/meteora.jpg', year: 2003, link:'meteora.html'},
    { name: 'Reanimation', Image: './img/linkinpark/reanimation.jpg', year: 2002, link:'reanimation.html'}, 
    { name: 'A Thousand Suns', Image: './img/linkinpark/athousandsuns.jpg', year: 2010, link:'athousandsuns.html'},
    { name: 'Hybrid Theory', Image: './img/linkinpark/hybridtheory.jpg', year: 2000, link:'hybridtheory.html'},
    { name: 'One More Light', Image: './img/linkinpark/onemorelight.jpg', year: 2017, link:'onemorelight.html'},
    { name: 'Minutes To Midnight', Image: './img/linkinpark/minutestomidnight.jpg', year: 2007, link:'minutestomidnight.html'},
    { name: 'From Zero', Image: './img/linkinpark/fromzero.jpg', year: 2024, link:'fromzero.html'},
    { name: 'Living Things', Image: './img/linkinpark/livingthings.jpg', year: 2012, link:'livingthings.html'},
];


 const albumsGridlinkin = document.querySelector('.albums-gridlinkin')

if (albumsGridlinkin) {
    albumsData.forEach(albums => {
        const albumsCardlinkin = document.createElement('div')
        albumsCardlinkin.classList.add('albums-cardlinkin')

        albumsCardlinkin.innerHTML = `
        <a href="${albums.link}">
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


const albumsData = [
  { name: 'Roman Candle', Image: './img/katebush/houndsoflove.jpg', year: 1994 },
  { name: 'Elliott Smith', Image: './img/katebush/thesensualworld.jpg', year: 1995 },
  { name: 'Either/Or', Image: './img/katebush/thekickinside.jpg', year: 1997 },
  { name: 'XO', Image: './img/katebush/neverforever.jpg', year: 1998 },
  { name: 'Figure 8', Image: './img/katebush/lionheart.jpg', year: 2000 },
  { name: 'From a Basement on the Hill', Image: './img/katebush/thedreaming.jpg', year: 2004 },
  { name: 'New Moon', Image: './img/katebush/theredshoes.jpg', year: 2007 }
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

// TOP 5 QUEEN

document.addEventListener('DOMContentLoaded', () => {
  const queen5 = [ 
    {name: 'Bohemian Rhapsody', Image: './img/queen/anightattheopera.jpg', audio: './musicas/queen/bohemianrhapsody.mp3'},
    {name: 'Don\'t Stop Me Now', Image: './img/queen/jazz.jpg', audio: './musicas/queen/dontstopmenow.mp3'},
    {name: 'Another One Bites the Dust', Image: './img/queen/thegame.jpg',audio: './musicas/queen/anotheronebitesthedust.mp3'},
    {name: 'We Will Rock You', Image: './img/queen/newssoftheworld.jpg', audio: './musicas/queen/wewillrockyou.mp3'},
    {name: 'Somebody to Love', Image: './img/queen/anightattheopera.jpg', audio: './musicas/queen/somebodytolove.mp3'}
  ];

  const listQueen = document.querySelector('.music-queen');

  queen5.forEach((musica) => {
    const tr = document.createElement('tr');
    tr.classList.add('music-item', 'music-item-queen');
    tr.dataset.audio = musica.audio;
    tr.style.cursor = 'pointer';

    tr.innerHTML = `
      <td>
        <img src="${musica.Image}" alt="Imagem da música ${musica.name}">
        <span>${musica.name}</span>
      </td>
    `;

    if (listQueen) listQueen.appendChild(tr);
  });
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

// Album in rainbows - Radiohead
document.addEventListener('DOMContentLoaded', () => {
  const inrainbows = [
    { name: '15 Step', audio: './musicas/15step.mp4' },
    { name: 'Bodysnatchers', audio: './musicas/bodysnatchers.mp4' },
    { name: 'Nude', audio: './musicas/nude.mp4' },
    { name: 'Weird Fishes Arpeggi', audio: './musicas/weirdfishesarpeggi.mp4' },
    { name: 'All I Need', audio: './musicas/allineed.mp4' },
    { name: 'Faust Arp', audio: './musicas/faustarp.mp4' },
    { name: 'Reckoner', audio: './musicas/reckoner.mp4' },
    { name: 'House of Cards', audio: './musicas/houseofcards.mp4' },
    { name: 'Jigsaw Falling Into Place', audio: './musicas/jigsawfallingintoplace.mp4' },
    { name: 'Videotape', audio: './musicas/videotape.mp4' }
  ];

  const list = document.querySelector(".music-inrainbows");

  inrainbows.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-inrainbows");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (list) list.appendChild(tr);
  });
});



// Album blur - Blur

document.addEventListener('DOMContentLoaded', () => {
  const blur = [
    { name: 'Beetlebum', audio: './musicas/beetlebum.mp4' },
    { name: 'Song 2', audio: './musicas/song2.mp4' },
    { name: 'Country Sad Ballad Man', audio: './musicas/countrysadballadman.mp4' },
    { name: 'M O R', audio: './musicas/mor.mp4' },
    { name: 'On Your Own', audio: './musicas/onyourown.mp4' },
    { name: 'Theme from Retro', audio: './musicas/themefromretro.mp4' },
    { name: 'Youre So Great', audio: './musicas/youresogreat.mp4' },
    { name: 'Death of a Party', audio: './musicas/deathofaparty.mp4' },
    { name: 'Chinese Bombs', audio: './musicas/chinesebombs.mp4' },
    { name: 'Im Just a Killer for Your Love', audio: './musicas/imjustakiller.mp4' },
    { name: 'Look Inside America', audio: './musicas/lookinsideamerica.mp4' },
    { name: 'Strange News from Another Star', audio: './musicas/strangenews.mp4' },
    { name: 'Movin On', audio: './musicas/movinon.mp4' },
    { name: 'Essex Dogs', audio: './musicas/essexdogs.mp4' }
  ];

  const list = document.querySelector(".music-blur");

  blur.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-blur");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (list) list.appendChild(tr);
  });
});

// Album rumours - Fleetwood Mac

document.addEventListener('DOMContentLoaded', () => {
  const rumours = [
    { name: 'Second Hand News', audio: './musicas/secondhandnews.mp4' },
    { name: 'Dreams', audio: './musicas/dreams.mp4' },
    { name: 'Never Going Back Again', audio: './musicas/nevergoingbackagain.mp4' },
    { name: 'Dont Stop', audio: './musicas/dontstop.mp4' },
    { name: 'Go Your Own Way', audio: './musicas/goyourownway.mp4' },
    { name: 'Songbird', audio: './musicas/songbird.mp4' },
    { name: 'The Chain', audio: './musicas/thechain.mp4' },
    { name: 'You Make Loving Fun', audio: './musicas/youmakelovingfun.mp4' },
    { name: 'I Dont Want to Know', audio: './musicas/idontwanttoknow.mp4' },
    { name: 'Oh Daddy', audio: './musicas/ohdaddy.mp4' },
    { name: 'Gold Dust Woman', audio: './musicas/golddustwoman.mp4' }
  ];

  const list = document.querySelector(".music-rumours");

  rumours.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-rumours");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (list) list.appendChild(tr);
  });
});

// Album the colour and the shape - Foo Fighters

document.addEventListener('DOMContentLoaded', () => {
  const colornshape = [
    { name: 'Doll', audio: './musicas/doll.mp4' },
    { name: 'Monkey Wrench', audio: './musicas/monkeywrench.mp4' },
    { name: 'Hey Johnny Park', audio: './musicas/heyjohnnypark.mp4' },
    { name: 'My Poor Brain', audio: './musicas/mypoorbrain.mp4' },
    { name: 'Wind Up', audio: './musicas/windup.mp4' },
    { name: 'Up in Arms', audio: './musicas/upinarms.mp4' },
    { name: 'My Hero', audio: './musicas/myhero.mp4' },
    { name: 'See You', audio: './musicas/seeyou.mp4' },
    { name: 'Enough Space', audio: './musicas/enoughspace.mp4' },
    { name: 'February Stars', audio: './musicas/februarystars.mp4' },
    { name: 'Everlong', audio: './musicas/everlong.mp4' },
    { name: 'Walking After You', audio: './musicas/walkingafteryou.mp4' },
    { name: 'New Way Home', audio: './musicas/newwayhome.mp4' }
  ];

  const list = document.querySelector(".music-colornshape");

  colornshape.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-colornshape");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (list) list.appendChild(tr);
  });
});

// Album use your illusion - Guns N' Roses
document.addEventListener('DOMContentLoaded', () => {
  const gnraillusion = [
    { name: 'Right Next Door to Hell', audio: './musicas/rightnextdoorthell.mp4' },
    { name: 'Dust N Bones', audio: './musicas/dustnbones.mp4' },
    { name: 'Live and Let Die', audio: './musicas/liveandletdie.mp4' },
    { name: 'Dont Cry', audio: './musicas/dontcry.mp4' },
    { name: 'Perfect Crime', audio: './musicas/perfectcrime.mp4' },
    { name: 'November Rain', audio: './musicas/novemberrain.mp4' },
    { name: 'Garden of Eden', audio: './musicas/gardenofeden.mp4' },
    { name: 'Dead Horse', audio: './musicas/deadhorse.mp4' },
    { name: 'Coma', audio: './musicas/coma.mp4' }
  ];

  const list = document.querySelector(".music-gnraillusion");

  gnraillusion.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-gnraillusion");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (list) list.appendChild(tr);
  });
});

// Album grace - Jeff Buckley
document.addEventListener('DOMContentLoaded', () => {
  const grace = [
    { name: 'Mojo Pin', audio: './musicas/mojopin.mp4' },
    { name: 'Grace', audio: './musicas/grace.mp4' },
    { name: 'Last Goodbye', audio: './musicas/lastgoodbye.mp4' },
    { name: 'Lilac Wine', audio: './musicas/lilacwine.mp4' },
    { name: 'So Real', audio: './musicas/soreal.mp4' },
    { name: 'Hallelujah', audio: './musicas/hallelujah.mp4' },
    { name: 'Lover You Shouldve Come Over', audio: './musicas/loveryoushouldvecomeover.mp4' },
    { name: 'Corpus Christi Carol', audio: './musicas/corpuschristicarol.mp4' },
    { name: 'Eternal Life', audio: './musicas/eternallife.mp4' },
    { name: 'Dream Brother', audio: './musicas/dreambrother.mp4' }
  ];

  const list = document.querySelector(".music-grace");

  grace.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-grace");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (list) list.appendChild(tr);
  });
});

// Album the bends - Radiohead
document.addEventListener('DOMContentLoaded', () => {
  const thebends = [
    { name: 'Planet Telex', audio: './musicas/planettelex.mp4' },
    { name: 'The Bends', audio: './musicas/thebends.mp4' },
    { name: 'High and Dry', audio: './musicas/highanddry.mp4' },
    { name: 'Fake Plastic Trees', audio: './musicas/fakeplastictrees.mp4' },
    { name: 'Bones', audio: './musicas/bones.mp4' },
    { name: 'Nice Dream', audio: './musicas/nicedream.mp4' },
    { name: 'Just', audio: './musicas/just.mp4' },
    { name: 'My Iron Lung', audio: './musicas/myironlung.mp4' },
    { name: 'Bullet Proof I Wish I Was', audio: './musicas/bulletproof.mp4' },
    { name: 'Black Star', audio: './musicas/blackstar.mp4' },
    { name: 'Sulk', audio: './musicas/sulk.mp4' },
    { name: 'Street Spirit Fade Out', audio: './musicas/streetspiritfadeout.mp4' }
  ];

  const list = document.querySelector(".music-thebends");

  thebends.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-thebends");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (list) list.appendChild(tr);
  });
});


// Album the queen is dead - The Smiths
document.addEventListener('DOMContentLoaded', () => {
  const thesmithsqueen = [
    { name: 'The Queen Is Dead', audio: './musicas/thequeenisdead.mp4' },
    { name: 'Frankly Mr Shankly', audio: './musicas/franklymrshankly.mp4' },
    { name: 'I Know Its Over', audio: './musicas/iknowitsover.mp4' },
    { name: 'Never Had No One Ever', audio: './musicas/neverhadnooneever.mp4' },
    { name: 'Cemetry Gates', audio: './musicas/cemetrygates.mp4' },
    { name: 'Bigmouth Strikes Again', audio: './musicas/bigmouthstrikesagain.mp4' },
    { name: 'The Boy with the Thorn in His Side', audio: './musicas/theboywiththethorn.mp4' },
    { name: 'There Is a Light That Never Goes Out', audio: './musicas/thereisalightthatnevergoesout.mp4' },
    { name: 'Some Girls Are Bigger Than Others', audio: './musicas/somegirlsarebiggerthanothers.mp4' }
  ];

  const list = document.querySelector(".music-thesmithsqueen");

  thesmithsqueen.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-thesmithsqueen");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (list) list.appendChild(tr);
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
