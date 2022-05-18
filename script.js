// MENU

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  header.classList.toggle('full-screen');
  body.classList.toggle('no-scroll');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  header.classList.remove('full-screen');
  body.classList.remove('no-scroll');
}));

// FEATURED ARTISTS

const artists = [
  {
    image: 'images/ryoji_ikeda.jpg',
    alt: 'Image of Ryoji Ikeda',
    name: 'Ryoji Ikeda',
    work: 'Japanese visual and sound artist',
    description: 'Ikeda\'s music is concerned primarily with sound in a variety of "raw" states, such as sine tones and noise, often using frequencies at the edges of the range of human hearing.',
  },
  {
    image: 'images/alva_noto.jpg',
    alt: 'Image of Alva Noto',
    name: 'Alva Noto',
    work: 'German composer and visual artist',
    description: 'His mayor works are of electronic music, glitch, microsound, minimal, techno and ambient. Also known by the sountrack of "The Revenant"',
  },
  {
    image: 'images/philip-glass_uhPi9s0.jpg',
    alt: 'Image of Phillip Glass', 
    name: 'Phillip Glass',
    work: 'American composer and pianist',
    description: 'He is widely regarded as one of the most influential composers of the late 20th century. Glass\'s work has been associated with minimalism, being built up from repetitive phrases and shifting layers.',
  },
  {
    image: 'images/steve_reich_lecture_150_20.jpg',
    alt: 'Image of Steve Reich',
    name: 'Steve Reich',
    work: 'American composer',
    description: 'Reich\'s work is marked by its use of repetitive figures, slow harmonic rhythm, and canons. His compositional style reflects his explicit rejection of Western classical traditions, serialism, and indeterminacy, because, unlike these traditions, he sought to create music in which the compositional process was discernible in the music itself.',
  },
  {
    image: 'images/la_monte_young.jpg',
    alt: 'Image of La Monte Young',
    name: 'La Monte Young',
    work: 'American composer',
    description: 'One of the first American minimalist composers and a central figure in post-war avant-garde music. He is best known for his exploration of sustained tones.',
  },
  {
    image: 'images/Terry_riley.jpg',
    alt: 'Image of Terry Riley',
    name: 'Terry Riley',
    work: 'American composer',
    description: 'Influenced by jazz and Indian classical music, his music became notable for its innovative use of repetition, tape music techniques, and delay systems.',
  },
]



const featuredArtists = (artists) => {

  for(let i = 0; i < artists.length; i++){

    const artistAllContainer = document.querySelector('.artist-all-container');

    const artistContainer = document.createElement('div');
    artistContainer.classList.add('artist-container');

    const artistImg = document.createElement('div');
    artistImg.classList.add('artist-img');

    const artistFace = document.createElement('img');
    artistFace.src = artists[i].image;
    artistFace.alt = artists[i].alt;

    const artistInfo = document.createElement('div');
    artistInfo.classList.add('artist-info');

    const artistName = document.createElement('h3')
    artistName.classList.add('artist-name');
    artistName.textContent = artists[i].name;

    const artistWork = document.createElement('h4');
    artistWork.classList.add('artist-work');
    artistWork.textContent = artists[i].work

    const artistP = document.createElement('p');
    artistP.classList.add('artist-p');
    artistP.textContent = artists[i].description;
    
    artistInfo.appendChild(artistName);
    artistInfo.appendChild(artistWork);
    artistInfo.appendChild(artistP);
    artistImg.appendChild(artistFace);
    artistContainer.appendChild(artistImg);
    artistContainer.appendChild(artistInfo);
    artistAllContainer.appendChild(artistContainer);

  }
};

featuredArtists(artists, artists.length);

