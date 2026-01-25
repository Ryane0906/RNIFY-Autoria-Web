//feito por Ryane de Azevedo Alves 


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
    { name: '15 Step', audio: './musicas/15steps.mp3' },
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

  const listgrace = document.querySelector(".music-grace");

  grace.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-grace");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (listgrace) listgrace.appendChild(tr);
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

  const listthebends = document.querySelector(".music-thebends");

  thebends.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-thebends");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (listthebends) listthebends.appendChild(tr);
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

  const listthequeen = document.querySelector(".music-thesmithsqueen");

  thesmithsqueen.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-thesmithsqueen");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (listthequeen) listthequeen.appendChild(tr);
  });
});

// PJ HARVEY — Stories from the City, Stories from the Sea

document.addEventListener('DOMContentLoaded', () => {
  const pjharveyalbum = [
    { name: 'Big Exit', audio: './musicas/pjharvey/bigexit.mp3' },
    { name: 'Good Fortune', audio: './musicas/pjharvey/goodfortune.mp3' },
    { name: 'A Place Called Home', audio: './musicas/pjharvey/aplacecalledhome.mp3' },
    { name: 'One Line', audio: './musicas/pjharvey/oneline.mp3' },
    { name: 'Beautiful Feeling', audio: './musicas/pjharvey/beautifulfeeling.mp3' },
    { name: 'The Whores Hustle and the Hustlers Whore', audio: './musicas/pjharvey/thewhores.mp3' },
    { name: 'This Is Love', audio: './musicas/pjharvey/thisislove.mp3' },
    { name: 'You Said Something', audio: './musicas/pjharvey/yousaidsomething.mp3' },
    { name: 'Kamikaze', audio: './musicas/pjharvey/kamikaze.mp3' },
    { name: 'This Mess We’re In', audio: './musicas/pjharvey/thismess.mp3' },
    { name: 'Horses in My Dreams', audio: './musicas/pjharvey/horsesinmydreams.mp3' },
    { name: 'We Float', audio: './musicas/pjharvey/wefloat.mp3' }
  ];

  const liststoriespj = document.querySelector(".music-storiespjharvey");

  pjharveyalbum.forEach(musica => {
    const tr = document.createElement("tr");
    tr.classList.add("music-item", "music-item-storiespjharvey");
    tr.dataset.audio = musica.audio;
    tr.innerHTML = `<td><span>${musica.name}</span></td>`;
    if (liststoriespj) liststoriespj.appendChild(tr);
  });
});