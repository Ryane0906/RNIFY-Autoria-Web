// ALBUNS E ARTISTAS (Ryane de Azevedo Alves e Nicolas Alexrande)
console.log("musicas.js carregou");

document.addEventListener('DOMContentLoaded', () => {
  const artistDataclassic = [
    { name: 'Kate Bush', Image: './img/artistas/katebush2.jpg', link: 'katebush.html' },
    { name: 'Jeff Buckley', Image: './img/artistas/jeffbuckley2.jpg', link: 'jeffbuckley.html' },
    { name: 'Elliott Smith', Image: './img/artistas/elliottsmith.jpg', link: 'elliottsmith.html' },
    { name: 'Queen', Image: './img/artistas/queen2.jpg', link: 'queen.html' },
    { name: 'Michael Jackson', Image: './img/artistas/michaeljackson2.jpg', link: 'michaeljackson.html' },
    { name: 'The Smiths', Image: './img/artistas/thesmiths.jpg', link: 'thesmiths.html' },
    { name: 'Radiohead', Image: './img/artistas/radiohead.jpg', link: 'radiohead.html' },
    { name: 'Linkin Park', Image: './img/artistas/linkinpark.jpg', link: 'linkinpark.html' },
    { name: 'Pink Floyd', Image: './img/artistas/pinkfloyd.jpg', link: 'pinkfloyd.html' },
    { name: 'Tame Impala', Image: './img/artistas/tameimpala.jpg', link: 'tameimpala.html' },
    { name: 'Pj Harvey', Image: './img/artistas/pjharvey.jpg', link: 'pjharvey.html' },
    { name: 'The Strokes', Image: './img/artistas/thestrokes.jpg', link: 'thestrokes.html' },
    { name: 'Tori Amos', Image: './img/artistas/toriamos.jpg', link: 'toriamos.html' },
    { name: 'The beatles', Image: './img/artistas/thebeatles.jpg', link: 'thebeatles.html' }
  ];


  const albumsDataclassic = [
    { name: 'Stories From The City, Stories From The Sea', artist: 'Pj Harvey', Image: './img/albuns/pjharveystories.jpg', link: 'storiespjharvey.html' },
    { name: 'The Colour And The Shape', artist: 'Foo Fighters', Image: './img/albuns/foofighterscolornshape.jpg', link: 'thecolour.html' },
    { name: 'Use Your Illusion I', artist: 'Guns N Roses', Image: './img/albuns/gnraillusion.jpg', link: 'useryourillusioni.html' },
    { name: 'Blur', artist: 'Blur', Image: './img/albuns/blur.jpg', link: 'blur.html' },
    { name: 'The Queen Is Dead', artist: 'The Smiths', Image: './img/albuns/thesmithsqueen.jpg', link: 'thequeen.html' },
    { name: 'Grace', artist: 'Jeff Buckley', Image: './img/albuns/jeffbuckleygrace.jpg', link: 'grace.html' },
    { name: 'In Rainbows', artist: 'Radiohead', Image: './img/radiohead/inrainbows.jpg', link: 'inrainbows.html' },
    { name: 'Meteora', artist: 'Linkin Park', Image: './img/albuns/meteora.jpg', link: 'meteora.html' },
    { name: 'The Bends', artist: 'Radiohead', Image: './img/albuns/radioheadthebends.jpg', link: 'thebends.html' },
    { name: 'Rumours', artist: 'Fleetwood Mac', Image: './img/albuns/rumours.jpg', link: 'rumours.html' },
    { name: 'The New Abnormal', artist: 'The Strokes', Image: './img/albuns/thenewabnormal.jpg', link: 'thenewabnormal.html' },
    { name: 'In Utero', artist: 'Nirnava', Image: './img/albuns/inutero.jpg', link: 'inutero.html' },
    { name: 'Figure 8', artist: 'Elliott Smith', Image: './img/albuns/figure8.jpg', link: 'figure8.html' },
    { name: 'Ultraviolence', artist: 'Lana Del Rey', Image: './img/albuns/ultraviolence.jpg', link: 'ultraviolence.html' }

  ];


  const artistGridclassic = document.querySelector('.artist-gridclassic')
  const albumsGridclassic = document.querySelector('.albums-gridclassic')


  if (artistGridclassic) {
    artistDataclassic.forEach(artist => {
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
    albumsDataclassic.forEach(albums => {
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

//TOP 5 LINKIN PARK

const linkin5 = [
  { name: 'In The End', Image: './img/albuns/meteora.jpg', audio: './musicas/intheend.mp3' },
  { name: 'Numb', Image: './img/albuns/meteora.jpg', audio: './musicas/numb.mp3' },
  { name: 'Somewhere I Belong', Image: './img/albuns/meteora.jpg', audio: './musicas/somewhereibelong.mp3' },
  { name: 'Faint', Image: './img/albuns/meteora.jpg', audio: './musicas/faint.mp3' },
  { name: 'Heavy Is The Crown', Image: './img/albuns/fromzero.jpg', audio: './musicas/heavyisthecrown.mp3' }
];

const listLinkinPark = document.querySelector(".music-linkinpark");

if (listLinkinPark) {
  linkin5.forEach((musica) => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
        <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
    `;

    listLinkinPark.appendChild(tr);
  });
}


// DISCOGRAFIA LINKINPARK

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Meteora', Image: './img/albuns/meteora.jpg', year: 2003 },
    { name: 'From Zero', Image: './img/albuns/fromzero.jpg', year: 2024 }
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
    { name: 'Creep', Image: './img/radiohead/pablohoney.jpg', audio: './musicas/creep.mp3', time: '3:36' },
    { name: 'Street Spirit (Fade Out)', Image: './img/radiohead/thebends.jpg', audio: './musicas/streetspirit.mp3', time: '6:23' },
    { name: 'All I Need', Image: './img/radiohead/inrainbows.jpg', audio: './musicas/allineed.mp3', time: '3:49' },
    { name: 'Weird fishes/Arpeggi', Image: './img/radiohead/inrainbows.jpg', audio: './musicas/weirdfishes.mp3', time: '4:13' },
    { name: '15 Steps', Image: './img/radiohead/inrainbows.jpg', audio: './musicas/15steps.mp3', time: '3:56' }
  ];

  const listRadiohead = document.querySelector(".music-radiohead");

  if (listRadiohead) {
    radio5.forEach((musica) => {
      const tr = document.createElement("tr");
      tr.classList.add("music-item", "music-item-radiohead");
      tr.dataset.audio = musica.audio;

      tr.innerHTML = `
      <td>
        <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
    `;

      listRadiohead.appendChild(tr);
    });
  }

});

// DISCOGRAFIA RADIOHEAD

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [

    { name: 'The Bends', Image: './img/radiohead/thebends.jpg', year: 1995 },
    { name: 'In Rainbows', Image: './img/radiohead/inrainbows.jpg', year: 2007 }
  ];

  const albumsGridradiohead = document.querySelector('.albums-gridradiohead');

  if (albumsGridradiohead) {
    albumsData.forEach(albums => {
      const albumsCardradiohead = document.createElement('div');
      albumsCardradiohead.classList.add('albums-cardradiohead');

      albumsCardradiohead.innerHTML = `
      <a href="${albums.link}">
      <img src="${albums.Image}" alt= "Álbum ${albums.name}">
      <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
      </div>
      `
      albumsGridradiohead.appendChild(albumsCardradiohead);
    });
  }
});

// TOP 5 JEFF BUCKLEY

const jeffbuckley5 = [
  { name: 'Grace', Image: './img/albuns/grace.jpg', audio: './musicas/grace.mp3' },
  { name: 'Everybody Here Wants You', Image: './img/albuns/mysweetheart.jpg', audio: './musicas/everybodyhere.mp3' },
  { name: 'Last Goodbye', Image: './img/albuns/grace.jpg', audio: './musicas/lastgoodbye.mp3' },
  { name: 'Lover, You Should\'ve Come Over', Image: './img/albuns/grace.jpg', audio: './musicas/lover.mp3' },
  { name: 'So Real', Image: './img/albuns/grace.jpg', audio: './musicas/soreal.mp3' }
];

const listJeff = document.querySelector(".music-jeffbuckley");

if (listJeff) {
  jeffbuckley5.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>  
      <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
      `;
    listJeff.appendChild(tr);
  });
}


// DISCOGRAFIA JEFF BUCKLEY

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Grace', Image: './img/albuns/grace.jpg', year: 1994 },
    { name: 'Sketches for My Sweetheart the Drunk', Image: './img/albuns/mysweetheart.jpg', year: 1998 }
  ];

  const albumsGridjeffbuckley = document.querySelector('.albums-gridjeffbuckley');

  if (albumsGridjeffbuckley) {
    albumsData.forEach(albums => {
      const albumsCardjeffbuckley = document.createElement('div');
      albumsCardjeffbuckley.classList.add('albums-cardjeffbuckley');

      albumsCardjeffbuckley.innerHTML = `
       <a href="${albums.link}">
        <img src="${albums.Image}" alt= "Álbum ${albums.name}">
        <div>
            <h3>${albums.name}</h3>
            <p>${albums.year}</p>
        </div>
        `
      albumsGridjeffbuckley.appendChild(albumsCardjeffbuckley);
    });
  }
});

// TOP 5 PJ HARVEY

const pjharvey5 = [
  { name: 'Down by the Water', Image: './img/albuns/pjharveystories.jpg', audio: './musicas/bythewater.mp3' },
  { name: 'This Is Love', Image: './img/albuns/pjharveystories.jpg', audio: './musicas/thisislove.mp3' },
  { name: 'This Mess Were in', Image: './img/albuns/pjharveystories.jpg', audio: './musicas/thismess.mp3' },
  { name: 'Rid of Me', Image: './img/albuns/bringyou.jpg', audio: './musicas/ridofme.mp3' },
  { name: 'Good Fortune', Image: './img/albuns/bringyou.jpg', audio: './musicas/goodfortune.mp3' }
];

const listPJ = document.querySelector(".music-pjharvey");

if (listPJ) {
  pjharvey5.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
      <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
      `;
    listPJ.appendChild(tr);
  });
}



// Discografia Pj Harvey

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Stories From The City, Stories From The Sea', Image: './img/albuns/pjharveystories.jpg', year: 2000 },
    { name: 'To Bring You My Love', Image: './img/albuns/bringyou.jpg', year: 1995 }
  ];

  const albumsGridpjharvey = document.querySelector('.albums-gridpjharvey');

  if (albumsGridpjharvey) {
    albumsData.forEach(albums => {
      const albumsCardpjharvey = document.createElement('div');
      albumsCardpjharvey.classList.add('albums-cardpjharvey');

      albumsCardpjharvey.innerHTML = `
      <a href="${albums.link}">
      <img src="${albums.Image}" alt= "Álbum ${albums.name}">
      <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
      </div>
      `
      albumsGridpjharvey.appendChild(albumsCardpjharvey);
    });
  }
});

// TOP 5 THE STROKES

const thestrokes5 = [
  { name: 'The Adults Are Talking', Image: './img/albuns/thenewabnormal.jpg', audio: './musicas/adultsaretalking.mp3' },
  { name: 'Reptilia', Image: './img/albuns/thenewabnormal.jpg', audio: './musicas/reptilia.mp3' },
  { name: 'Someday', Image: './img/albuns/isthisit.jpg', audio: './musicas/someday.mp3' },
  { name: 'Last Nite', Image: './img/albuns/isthisit.jpg', audio: './musicas/lastnite.mp3' },
  { name: 'Soma', Image: './img/albuns/isthisit.jpg', audio: './musicas/soma.mp3' }
];

const listthestrokes = document.querySelector(".music-thestrokes");

if (listthestrokes) {
  thestrokes5.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
      <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
      `;
    listthestrokes.appendChild(tr);
  });
}

// Discografia THE STROKES


document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'The New Abnormal', Image: './img/albuns/thenewabnormal.jpg', year: 1997, link: 'storiespjharvey.html' },
    { name: 'Is This It', Image: './img/albuns/isthisit.jpg', year: 1995, link: 'darkside.html' }
  ];

  const albumsGridthestrokes = document.querySelector('.albums-gridthestrokes');

  if (albumsGridthestrokes) {
    albumsData.forEach(albums => {
      const albumsCardthestrokes = document.createElement('div');
      albumsCardthestrokes.classList.add('albums-cardthestrokes');

      albumsCardthestrokes.innerHTML = `
      <a href="${albums.link}">
      <img src="${albums.Image}" alt= "Álbum ${albums.name}">
      <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
      </div>
      `
      albumsGridthestrokes.appendChild(albumsCardthestrokes);
    });
  }
});


// TOP 5 TORI AMOS

const toriamos5 = [
  { name: 'Cornflake Girl', Image: './img/albuns/little.jpg', audio: './musicas/cornflakegirl.mp3' },
  { name: 'Winter', Image: './img/albuns/little.jpg', audio: './musicas/winter.mp3' },
  { name: 'Me And a Gun', Image: './img/albuns/choirgirl.jpg', audio: './musicas/meandagun.mp3' },
  { name: 'Girl', Image: './img/albuns/choirgirl.jpg', audio: './musicas/girl.mp3' },
  { name: 'Blood Roses', Image: './img/albuns/little.jpg', audio: './musicas/bloodroses.mp3' }
];

const listTori = document.querySelector(".music-toriamos");

if (listTori) {
  toriamos5.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
      <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
      `;
    listTori.appendChild(tr);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'From The Choir Hotel', Image: './img/albuns/choirgirl.jpg', year: 1997 },
    { name: 'Little Earthquakes', Image: './img/albuns/little.jpg', year: 1995 }
  ];

  const albumsGridtoriamos = document.querySelector('.albums-gridtoriamos');

  if (albumsGridtoriamos) {
    albumsData.forEach(albums => {
      const albumsCardtoriamos = document.createElement('div');
      albumsCardtoriamos.classList.add('albums-cardtoriamos');

      albumsCardtoriamos.innerHTML = `
      <a href="${albums.link}">
      <img src="${albums.Image}" alt= "Álbum ${albums.name}">
      <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
      </div>
      `
      albumsGridtoriamos.appendChild(albumsCardtoriamos);
    });
  }
});


// TOP 5 PINK FLOYD

const pinkfloyd5 = [
  { name: 'Wish You Were Here', Image: './img/artistas/pinkfloyd.jpg', audio: './musicas/wishyou.mp3' },
  { name: 'Comfortably Numb', Image: './img/albuns/thewall.jpg', audio: './musicas/comfortablynumb.mp3' },
  { name: 'Time', Image: './img/artistas/pinkfloyd.jpg', audio: './musicas/time.mp3' },
  { name: 'Money', Image: './img/artistas/pinkfloyd.jpg', audio: './musicas/money.mp3' },
  { name: 'Another Brick In The Wall', Image: './img/albuns/thewall.jpg', audio: './musicas/brick.mp3' }
];

const listFloyd = document.querySelector(".music-pinkfloyd");

if (listFloyd) {
  pinkfloyd5.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
      <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
      `;
    listFloyd.appendChild(tr);
  });
}

// DISCOGRAFIA PINK FLOYD

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'The Wall', Image: './img/albuns/thewall.jpg', year: 1997 },
    { name: 'The Dark Side of The Moon', Image: './img/artistas/pinkfloyd.jpg', year: 1995 }
  ];

  const albumsGridtpinkfloyd = document.querySelector('.albums-gridpinkfloyd');

  if (albumsGridtpinkfloyd) {
    albumsData.forEach(albums => {
      const albumsCardpinkfloyd = document.createElement('div');
      albumsCardpinkfloyd.classList.add('albums-cardpinkfloyd');

      albumsCardpinkfloyd.innerHTML = `
      <a href="${albums.link}">
      <img src="${albums.Image}" alt= "Álbum ${albums.name}">
      <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
      </div>
      `
      albumsGridtpinkfloyd.appendChild(albumsCardpinkfloyd);
    });
  }
});

// TOP 5 THE SMITHS

const thesmiths5 = [
  { name: 'There Is a Light That Never Goes Out', Image: './img/albuns/hatful.jpg', audio: './musicas/thereisalight.mp3' },
  { name: 'This Charming Man', Image: './img/albuns/thesmithsqueen.jpg', audio: './musicas/charming.mp3' },
  { name: 'How Soon Is Now?', Image: './img/albuns/hatful.jpg', audio: './musicas/howsoon.mp3' },
  { name: 'Heaven Knows I\'m Miserable Now', Image: './img/albuns/hatful.jpg', audio: './musicas/heavenknows.mp3' },
  { name: 'Bigmouth Strikes Again', Image: './img/albuns/thesmithsqueen.jpg', audio: './musicas/bigmouth.mp3' }
];

const listSmiths = document.querySelector(".music-thesmiths");

if (listSmiths) {
  thesmiths5.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
      <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
      `;
    listSmiths.appendChild(tr);
  });
}

// DISCOGRAFIA THE SMITHS

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'The Queen Is Dead', Image: './img/albuns/thesmithsqueen.jpg', year: 1997, link: 'thequeen.html' },
    { name: 'Hatful Of Hollow', Image: './img/albuns/hatful.jpg', year: 1995, link: 'hatful.html' }
  ];

  const albumsGridthesmiths = document.querySelector('.albums-gridthesmiths');

  if (albumsGridthesmiths) {
    albumsData.forEach(albums => {
      const albumsCardthesmiths = document.createElement('div');
      albumsCardthesmiths.classList.add('albums-cardthesmiths');

      albumsCardthesmiths.innerHTML = `
      <a href="${albums.link}">
      <img src="${albums.Image}" alt= "Álbum ${albums.name}">
      <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
      </div>
      `
      albumsGridthesmiths.appendChild(albumsCardthesmiths);
    });
  }
});


// TOP 5 TAME IMPALA

const tameimpala5 = [
  { name: 'The Less I Know the Better', Image: './img/albuns/currents.jpg', audio: './musicas/thelessiknow.mp3' },
  { name: 'Dracula', Image: './img/albuns/deadbeat.jpg', audio: './musicas/dracula.mp3' },
  { name: 'Let It Happen', Image: './img/albuns/currents.jpg', audio: './musicas/letithappen.mp3' },
  { name: 'Elephant', Image: './img/albuns/deadbeat.jpg', audio: './musicas/elephant.mp3' },
  { name: 'New Person Same Old Mistakes', Image: './img/albuns/currents.jpg', audio: './musicas/oldmistakes.mp3' }
];

const listTame = document.querySelector(".music-tameimpala");

if (listTame) {
  tameimpala5.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
      <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
      `;
    listTame.appendChild(tr);
  });
}

// DiSCOGRAFIA TAME IMPALA

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Dead Beat', Image: './img/albuns/deadbeat.jpg', year: 1997, link: 'deadbeat.html' },
    { name: 'Currents', Image: './img/albuns/currents.jpg', year: 1995, link: 'currents.html' }
  ];

  const albumsGridtameimpala = document.querySelector('.albums-gridtameimpala');

  if (albumsGridtameimpala) {
    albumsData.forEach(albums => {
      const albumsCardtameimpala = document.createElement('div');
      albumsCardtameimpala.classList.add('albums-cardtameimpala');

      albumsCardtameimpala.innerHTML = `
      <a href="${albums.link}">
      <img src="${albums.Image}" alt= "Álbum ${albums.name}">
      <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
      </div>
      `
      albumsGridtameimpala.appendChild(albumsCardtameimpala);
    });
  }
});

// TOP 5 MICHAEL JACKSON

const michaeljackson5 = [
  { name: 'Dirty Diana', Image: './img/albuns/bad.jpg', audio: './musicas/dirtydiana.mp3' },
  { name: 'Beat It', Image: './img/albuns/bad.jpg', audio: './musicas/beatit.mp3' },
  { name: 'Thriller', Image: './img/albuns/thriller.jpg', audio: './musicas/thriller.mp3' },
  { name: 'Smooth Criminal', Image: './img/albuns/bad.jpg', audio: './musicas/smoothcriminal.mp3' },
  { name: 'Rock With You', Image: './img/albuns/thriller.jpg', audio: './musicas/rockwithyou.mp3' }
];

const listMichaelJackson = document.querySelector('.music-michaeljackson');

if (listMichaelJackson) {
  michaeljackson5.forEach(musica => {
    const tr = document.createElement('tr');
    tr.classList.add('music-item');
    tr.dataset.audio = musica.audio;
    tr.style.cursor = 'pointer';

    tr.innerHTML = `
      <td>
        <img src="${musica.Image}" alt="Imagem da música ${musica.name}">
        <span>${musica.name}</span>
      </td>
    `;

    listMichaelJackson.appendChild(tr);
  });
}

// DISCOGRAFIA MICHAEL JACKSON

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Bad', Image: './img/albuns/Bad.jpg', year: 2003 },
    { name: 'Thriller', Image: './img/albuns/Thriller.jpg', year: 2024 }
  ];


  const albumsGridmichael = document.querySelector('.albums-gridmichael')

  if (albumsGridmichael) {
    albumsData.forEach(albums => {
      const albumsCardmichael = document.createElement('div')
      albumsCardmichael.classList.add('albums-cardmichael')

      albumsCardmichael.innerHTML = `
          <a href="${albums.link}">
          <img src="${albums.Image}" alt= "Álbum ${albums.name}">
          <div>
              <h3>${albums.name}</h3>
              <p>${albums.year}</p>
          </div>
          `
      albumsGridmichael.appendChild(albumsCardmichael)

    })
  }
})


// TOP 5 THE BEATLES

const beatles5 = [
  { name: 'Dont Let Me Down', Image: './img/albuns/abbeyroad.jpg', audio: './musicas/dontletmedown.mp3' },
  { name: 'In My Life', Image: './img/albuns/letitbe.jpg', audio: './musicas/inmylife.mp3' },
  { name: 'Come Together', Image: './img/albuns/abbeyroad.jpg', audio: './musicas/cometogether.mp3' },
  { name: 'Here Comes The Sun', Image: './img/albuns/abbeyroad.jpg', audio: './musicas/herecomes.mp3' },
  { name: 'Something', Image: './img/albuns/abbeyroad.jpg', audio: './musicas/something.mp3' }
];

const listBeatles = document.querySelector(".music-beatles");

if (listBeatles) {
  beatles5.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
      <img src="${musica.Image}"> <span>${musica.name}</span>
      </td>
      `;
    listBeatles.appendChild(tr);
  });
}

//DISCOGRAFIA THE BEATLES

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Abbey Road', Image: './img/albuns/abbeyroad.jpg', year: 1969 },
    { name: 'Let It Be', Image: './img/albuns/letitbe.jpg', year: 1970 }

  ];

  const albumsGridthebeatles = document.querySelector('.albums-gridthebeatles');

  if (albumsGridthebeatles) {
    albumsData.forEach(albums => {
      const albumsCardthebeatles = document.createElement('div');
      albumsCardthebeatles.classList.add('albums-cardthebeatles');

      albumsCardthebeatles.innerHTML = `
        <img src="${albums.Image}" alt="Álbum ${albums.name}">
        <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
        </div>
      `;
      albumsGridthebeatles.appendChild(albumsCardthebeatles);
    });
  }
});


//TOP 5 KATE BUSH

document.addEventListener('DOMContentLoaded', () => {
  const katebush5 = [
    { name: 'Running Up That Hill', Image: './img/katebush/houndsoflove.jpg', audio: './musicas/runningupthathill.mp3' },
    { name: 'Hounds of Love', Image: './img/katebush/houndsoflove.jpg', audio: './musicas/houndsoflove.mp3' },
    { name: 'Jig Of Life', Image: './img/katebush/houndsoflove.jpg', audio: './musicas/jigoflife.mp3' },
    { name: 'Babooshka', Image: './img/katebush/neverforever.jpg', audio: './musicas/babooshka.mp3' },
    { name: 'Wuthering Heights', Image: './img/katebush/thekickinside.jpg', audio: './musicas/wutheringheigths.mp3' }
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
    { name: 'Hounds of Love', Image: './img/katebush/houndsoflove.jpg', year: 1997 },
    { name: 'The Dreaming', Image: './img/katebush/thedreaming.jpg', year: 2001 }

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


const elliott5 = [
  { name: 'Between the Bars', Image: './img/albuns/eitheror.jpg', audio: './musicas/betweenthebars.mp3' },
  { name: 'Somebody That I Used To Know', Image: './img/albuns/figure8.jpg', audio: './musicas/somebodythat.mp3' },
  { name: 'Son Of Sam', Image: './img/albuns/eitheror.jpg', audio: './musicas/sonofsam.mp3' },
  { name: 'Clementine', Image: './img/albuns/eitheror.jpg', audio: './musicas/clementine.mp3' },
  { name: 'Say Yes', Image: './img/albuns/figure8.jpg', audio: './musicas/sayyes.mp3' }
];

const listelliott = document.querySelector(".music-elliott");

if (listelliott) {
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

    listelliott.appendChild(tr);
  });
}




// DISCOGRAFIA ELLIOTT SMITH

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Figure 8', Image: './img/albuns/figure8.jpg', year: 1997, link: 'figure8.html' },
    { name: 'Either/Or', Image: './img/albuns/eitheror.jpg', year: 1995, link: 'eitheror.html' }
  ];

  const albumsGridelliott = document.querySelector('.albums-gridelliott');

  if (albumsGridelliott) {
    albumsData.forEach(albums => {
      const albumsCardelliott = document.createElement('div');
      albumsCardelliott.classList.add('albums-cardelliott');

      albumsCardelliott.innerHTML = `
      <a href="${albums.link}">
      <img src="${albums.Image}" alt= "Álbum ${albums.name}">
      <div>
          <h3>${albums.name}</h3>
          <p>${albums.year}</p>
      </div>
      `
      albumsGridelliott.appendChild(albumsCardelliott);
    });
  }
});

// TOP 5 QUEEN
const queen5 = [
  { name: 'Bohemian Rhapsody', Image: './img/albuns/bohemianrhapsody.jpg', audio: './musicas/bohemianrhapsody.mp3' },
  { name: 'Dont Stop Me Now', Image: './img/albuns/bohemianrhapsody.jpg', audio: './musicas/dontstopmenow.mp3' },
  { name: 'Another One Bites the Dust', Image: './img/albuns/theworks.jpg', audio: './musicas/anotherbitestodust.mp3' },
  { name: 'We Will Rock You', Image: './img/albuns/bohemianrhapsody.jpg', audio: './musicas/wewillrockyou.mp3' },
  { name: 'Somebody to Love', Image: './img/albuns/theworks.jpg', audio: './musicas/somebodytolove.mp3' }
];

const listqueen = document.querySelector(".music-queen");



if (listqueen) {
  queen5.forEach((musica, i) => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-queen");
    tr.dataset.audio = musica.audio;
    tr.style.cursor = "pointer";

    tr.innerHTML = `
      <td>
      <img src="${musica.Image}" alt="Imagem da música ${musica.name}"> <span>${musica.name}</span>
      </td>
      `;

    listqueen.appendChild(tr);
  });
}

// DISCOGRAFIA QUEEN

document.addEventListener('DOMContentLoaded', () => {
  const albumsData = [
    { name: 'Bohemian Rhapsody', Image: './img/albuns/bohemianrhapsody.jpg', year: 2003, link: 'bohemianrhapsody.html' },
    { name: 'The Works', Image: './img/albuns/theworks.jpg', year: 2024, link: 'theworks.html' }
  ];

  const albumsGridqueen = document.querySelector('.albums-gridqueen');

  if (albumsGridqueen) {
    albumsData.forEach(album => {
      const albumCard = document.createElement('div');
      albumCard.classList.add('albums-cardqueen');
      albumCard.innerHTML = `
        <a href="${album.link}">
          <img src="${album.Image}" alt="Álbum ${album.name}">
          <div>
            <h3>${album.name}</h3>
            <p>${album.year}</p>
          </div>
        </a>
      `;

      albumsGridqueen.appendChild(albumCard);
    });
  }
});

// Album meteora - Linkin Park

document.addEventListener('DOMContentLoaded', () => {
  const meteora = [
  { name: 'In The End', Image: './img/albuns/meteora.jpg', audio: './musicas/intheend.mp3' },
  { name: 'Numb', Image: './img/albuns/meteora.jpg', audio: './musicas/numb.mp3' },
  { name: 'Somewhere I Belong', Image: './img/albuns/meteora.jpg', audio: './musicas/somewhereibelong.mp3' },
  { name: 'Faint', Image: './img/albuns/meteora.jpg', audio: './musicas/faint.mp3' },
  { name: 'The Emptiness Machine', Image: './img/albuns/meteora.jpg', audio: './musicas/machine.mp3' },
  { name: 'Heavy Is The Crown', Image: './img/albuns/fromzero.jpg', audio: './musicas/heavyisthecrown.mp3' }
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
    { name: '15 Step', audio: './musicas/15steps.mp3' },
    { name: 'Bodysnatchers', audio: './musicas/bodysnatchers.mp3' },
    { name: 'Weird Fishes Arpeggi', audio: './musicas/weirdfishes.mp3' },
    { name: 'All I Need', audio: './musicas/allineed.mp3' },
    { name: 'House of Cards', audio: './musicas/houseofcards.mp3' },
    { name: 'Jigsaw Falling Into Place', audio: './musicas/jigsawfalling.mp3' }
  ];

  const listInRainbows = document.querySelector(".music-inrainbows");

  if (listInRainbows) {
    inrainbows.forEach(musica => {
      const tr = document.createElement("tr");
      tr.classList.add("music-item", "music-item-inrainbows");
      tr.dataset.audio = musica.audio;
      tr.innerHTML = `<td><span>${musica.name}</span></td>`;
      listInRainbows.appendChild(tr);
    });
  }

});



// Album blur - Blur

document.addEventListener('DOMContentLoaded', () => {
  const blur = [
    { name: 'Beetlebum', audio: './musicas/beetlebum.mp3' },
    { name: 'Song 2', audio: './musicas/song2.mp3' },
    { name: 'Country Sad Ballad Man', audio: './musicas/countrysad.mp3' },
    { name: 'M O R', audio: './musicas/mor.mp3' },
    { name: 'On Your Own', audio: './musicas/onyourown.mp3' },
    { name: 'Essex Dogs', audio: './musicas/essexdogs.mp3' }
  ];

  const listBlur = document.querySelector(".music-blur");

  if (listBlur) {
    blur.forEach(musica => {
      const tr = document.createElement("tr");
      tr.classList.add("music-item", "music-item-blur");
      tr.dataset.audio = musica.audio;
      tr.innerHTML = `<td><span>${musica.name}</span></td>`;
      listBlur.appendChild(tr);
    });
  }

});



// Album rumours - Fleetwood Mac

document.addEventListener('DOMContentLoaded', () => {
  const rumours = [
    { name: 'Second Hand News', audio: './musicas/secondhand.mp3' },
    { name: 'Dreams', audio: './musicas/dreams.mp3' },
    { name: 'Dont Stop', audio: './musicas/dontstop.mp3' },
    { name: 'Go Your Own Way', audio: './musicas/ownway.mp3' },
    { name: 'The Chain', audio: './musicas/thechain.mp3' },
    { name: 'I Dont Want to Know', audio: './musicas/dontwantknow.mp3' }

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
    { name: 'Wind Up', audio: './musicas/windup.mp3' },
    { name: 'See You', audio: './musicas/seeyou.mp3' },
    { name: 'Enough Space', audio: './musicas/enoughspace.mp3' },
    { name: 'February Stars', audio: './musicas/february.mp3' },
    { name: 'My Hero', audio: './musicas/myhero.mp3' },
    { name: 'Everlong', audio: './musicas/everlong.mp3' }
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
    { name: 'Right Next Door to Hell', audio: './musicas/nextdoor.mp3' },
    { name: 'Dust N Bones', audio: './musicas/dustnbones.mp3' },
    { name: 'Dont Cry', audio: './musicas/dontcry.mp3' },
    { name: 'November Rain', audio: './musicas/novemberrain.mp3' },
    { name: 'Garden of Eden', audio: './musicas/gardenofeden.mp3' },
    { name: 'Coma', audio: './musicas/coma.mp3' }
  ];

  const listGnR = document.querySelector(".music-gnraillusion");

  if (listGnR) {
    gnraillusion.forEach(musica => {
      const tr = document.createElement("tr");
      tr.classList.add("music-item", "music-item-gnraillusion");
      tr.dataset.audio = musica.audio;
      tr.innerHTML = `<td><span>${musica.name}</span></td>`;
      listGnR.appendChild(tr);
    });
  }

  // Album grace - Jeff Buckley

  (function () {

    const grace = [
      { name: 'Mojo Pin', audio: './musicas/mojopin.mp3' },
      { name: 'Grace', audio: './musicas/grace.mp3' },
      { name: 'Last Goodbye', audio: './musicas/lastgoodbye.mp3' },
      { name: 'Lover You Shouldve Come Over', audio: './musicas/lover.mp3' },
      { name: 'So Real', audio: './musicas/soreal.mp3' },
      { name: 'Hallelujah', audio: './musicas/hallelujah.mp3' },
    ];

    function populategrace() {
      const listGrace = document.querySelector('.music-grace');
      if (!listGrace) return;
      grace.forEach(musica => {
        const tr = document.createElement('tr');
        tr.classList.add('music-item', 'music-item-grace');
        tr.dataset.audio = musica.audio;
        tr.innerHTML = `<td><span>${musica.name}</span></td>`;
        listGrace.appendChild(tr);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', populategrace);
    } else {
      populategrace();
    }
  })();

  // Album The New Abnormal - The Strokes

 (function () {

  const newAbnormal = [
    { name: 'The Adults Are Talking', audio: './musicas/adultsaretalking.mp3' },
    { name: 'Selfless', audio: './musicas/selfless.mp3' },
    { name: 'Brooklyn Bridge to Chorus', audio: './musicas/tochorus.mp3' },
    { name: 'Bad Decisions', audio: './musicas/baddecisions.mp3' },
    { name: 'At The Door', audio: './musicas/atthedoor.mp3' },
    { name: 'Ode to the Mets', audio: './musicas/odetothemets.mp3' },
  ];

  function populateNewAbnormal() {
    const listNewAbnormal = document.querySelector('.music-new-abnormal');
    if (!listNewAbnormal) return;

    newAbnormal.forEach(musica => {
      const tr = document.createElement('tr');
      tr.classList.add('music-item', 'music-item-new-abnormal');
      tr.dataset.audio = musica.audio;
      tr.innerHTML = `<td><span>${musica.name}</span></td>`;
      listNewAbnormal.appendChild(tr);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateNewAbnormal);
  } else {
    populateNewAbnormal();
  }

})();

//Album in utero - Nirvana

(function () {

  const inUtero = [
    { name: 'Serve the Servants', audio: './musicas/serve.mp3' },
    { name: 'Scentless Apprentice', audio: './musicas/scentless.mp3' },
    { name: 'Heart-Shaped Box', audio: './musicas/heartshapedbox.mp3' },
    { name: 'Dumb', audio: './musicas/dumb.mp3' },
    { name: 'Frances Farmer Will Have Her Revenge on Seattle', audio: './musicas/frances.mp3' },
    { name: 'All Apologies', audio: './musicas/allapologies.mp3' },
  ];

  function populateInUtero() {
    const listInUtero = document.querySelector('.music-in-utero');
    if (!listInUtero) return;

    inUtero.forEach(musica => {
      const tr = document.createElement('tr');
      tr.classList.add('music-item', 'music-item-in-utero');
      tr.dataset.audio = musica.audio;
      tr.innerHTML = `<td><span>${musica.name}</span></td>`;
      listInUtero.appendChild(tr);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateInUtero);
  } else {
    populateInUtero();
  }

})();

// Figure 8 - Elliott Smith

(function () {
  const figure8 = [
    { name: 'Son of Sam', audio: './musicas/sonofsam.mp3' },
    { name: 'Somebody That I Used to Know', audio: './musicas/somebodythat.mp3' },
    { name: 'Junk Bond Trader', audio: './musicas/junk.mp3' },
    { name: 'Everything Means Nothing to Me', audio: './musicas/everything.mp3' },
    { name: 'L.A.', audio: './musicas/la.mp3' },
    { name: 'Happiness', audio: './musicas/happiness.mp3' }
  ];

  function populateFigure8() {
    const listFigure8 = document.querySelector('.music-figure8');
    if (!listFigure8) return;

    figure8.forEach(musica => {
      const tr = document.createElement('tr');
      tr.classList.add('music-item', 'music-item-figure8');
      tr.dataset.audio = musica.audio;
      tr.innerHTML = `<td><span>${musica.name}</span></td>`;
      listFigure8.appendChild(tr);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateFigure8);
  } else {
    populateFigure8();
  }

})();

  // album the queen is dead - the smiths

  (function () {
    const thequeenisdead = [
      { name: 'The Queen Is Dead', audio: './musicas/thequeenisdead.mp3' },
      { name: 'Frankly, Mr. Shankly', audio: './musicas/frankly.mp3' },
      { name: 'I Know Its Over', audio: './musicas/itsover.mp3' },
      { name: 'Cemetry Gates', audio: './musicas/cemetrygates.mp3' },
      { name: 'Bigmouth Strikes Again', audio: './musicas/bigmouth.mp3' },
      { name: 'There Is a Light That Never Goes Out', audio: './musicas/thereisalight.mp3' }
    ];

    function populateTheQueenIsDead() {
      const listTheQueenIsDead = document.querySelector('.music-thesqueenisdead');
      if (!listTheQueenIsDead) return;
      thequeenisdead.forEach(musica => {
        const tr = document.createElement('tr');
        tr.classList.add('music-item', 'music-item-thequeenisdead');
        tr.dataset.audio = musica.audio;
        tr.innerHTML = `<td><span>${musica.name}</span></td>`;
        listTheQueenIsDead.appendChild(tr);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', populateTheQueenIsDead);
    } else {
      populateTheQueenIsDead();
    }
  })();


  // Album the bends - Radiohead

   (function () {
    const thebends = [
  
      { name: 'The Bends', audio: './musicas/thebends.mp3' },
      { name: 'High and Dry', audio: './musicas/highanddry.mp3' },
      { name: 'Fake Plastic Trees', audio: './musicas/plasticstree.mp3' },
      { name: 'Bones', audio: './musicas/bones.mp3' },
      { name: 'Just', audio: './musicas/just.mp3' },
      { name: 'My Iron Lung', audio: './musicas/ironlung.mp3' }
    ];

    function populateTheBends() {
      const listTheBends = document.querySelector('.music-thebends');
      if (!listTheBends) return;
      thebends.forEach(musica => {
        const tr = document.createElement('tr');
        tr.classList.add('music-item', 'music-item-thebends');
        tr.dataset.audio = musica.audio;
        tr.innerHTML = `<td><span>${musica.name}</span></td>`;
        listTheBends.appendChild(tr);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', populateTheBends);
    } else {
      populateTheBends();
    }
  })();
   
// Album Ultraviolence - Lana Del Rey

(function () {
  const ultraviolence = [
    { name: 'Cruel World', audio: './musicas/cruelworld.mp3' },
    { name: 'Ultraviolence', audio: './musicas/ultraviolence.mp3' },
    { name: 'Shades of Cool', audio: './musicas/shadesofcool.mp3' },
    { name: 'Brooklyn Baby', audio: './musicas/brooklynbaby.mp3' },
    { name: 'West Coast', audio: './musicas/westcoast.mp3' },
    { name: 'Sad Girl', audio: './musicas/sadgirl.mp3' },
  ];

    function populateUltraviolence() {
      const listUltraviolence = document.querySelector('.music-ultraviolence');
      if (!listUltraviolence) return;
      ultraviolence.forEach(musica => {
        const tr = document.createElement('tr');
        tr.classList.add('music-item', 'music-item-ultraviolence');
        tr.dataset.audio = musica.audio;
        tr.innerHTML = `<td><span>${musica.name}</span></td>`;
        listUltraviolence.appendChild(tr);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', populateUltraviolence);
    } else {
      populateUltraviolence();
    }
  })();

  // Album Stories From The City Stories From The Sea PJ Harvey 

  (function () {
    const storiespjharvey = [
      { name: 'Big Exit', audio: './musicas/bigexit.mp3' },
      { name: 'Good Fortune', audio: './musicas/goodfortune.mp3' },
      { name: 'A Place Called Home', audio: './musicas/aplace.mp3' },
      { name: 'One Line', audio: './musicas/oneline.mp3' },
      { name: 'Beautiful Feeling', audio: './musicas/beautifulfeeling.mp3' },
      { name: 'This Mess Were In', audio: './musicas/thismess.mp3' }
    ];

    function populateStories() {
      const listStories = document.querySelector('.music-storiespjharvey');
      if (!listStories) return;
      storiespjharvey.forEach(musica => {
        const tr = document.createElement('tr');
        tr.classList.add('music-item', 'music-item-storiespjharvey');
        tr.dataset.audio = musica.audio;
        tr.innerHTML = `<td><span>${musica.name}</span></td>`;
        listStories.appendChild(tr);
      });
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', populateStories);
    } else {
      populateStories();
    }
  })();


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
});