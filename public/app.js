const imageList = [
  'antialgae_0000.png',
  'antialgae_0001.png',
  'antialgae_0002.png',
  'bimini_0000.png',
  'bimini_0001.png',
  'bimini_0002.png',
  'body_0000.png',
  'body_0001.png',
  'body_0002.png',
  'cupholders_0000.png',
  'cupholders_0001.png',
  'cupholders_0002.png',
  'dorzslec_0000.png',
  'dorzslec_0001.png',
  'dorzslec_0002.png',
  'guard_0000.png',
  'guard_0001.png',
  'guard_0002.png',
  'kikotobika_0000.png',
  'kikotobika_0001.png',
  'kikotobika_0002.png',
  'kikotokarika_0000.png',
  'kikotokarika_0001.png',
  'kikotokarika_0002.png',
  'ladder_0000.png',
  'ladder_0001.png',
  'ladder_0002.png',
  'noseguard_0000.png',
  'noseguard_0001.png',
  'noseguard_0002.png',
  'upholstery_beige_0000.png',
  'upholstery_beige_0001.png',
  'upholstery_beige_0002.png',
  'upholstery_blue_0000.png',
  'upholstery_blue_0001.png',
  'upholstery_blue_0002.png',
];

const biminiInput = document.getElementById('bimini-input');
const imgBase = document.getElementById('img-base');
let images = document.querySelectorAll('.img-wrapper > img');
let currentView = 0;

function toggleDropdown(wrapperID) {
  const menu = document.getElementById(wrapperID);
  const icon = document.getElementById(wrapperID + '-icon');
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    icon.style.transform = 'none';
  } else {
    menu.style.display = 'none';
    icon.style.transform = 'rotate(180deg)';
  }
}

function switchView(toNext) {
  if (toNext === true) {
    if (currentView < 2) {
      currentView++;
    } else {
      currentView = 0;
    }
  } else {
    if (currentView > 0) {
      currentView--;
    } else {
      currentView = 2;
    }
  }
  const images = document.querySelectorAll('.img-wrapper > img');
  images.forEach((element) => {
    let source = element.getAttribute('src');
    source = source.substring(0, source.length - 5).concat(currentView + '.png');
    element.setAttribute('src', source);
  });
}

function showElement(id) {
  const element = document.getElementById(id);
  if (element.style.visibility == 'hidden') {
    element.style.visibility = 'initial';
  } else {
    element.style.visibility = 'hidden';
  }
}

for (let i = 0; i < imageList.length; i++) {
  let img = new Image();
  img.src = `data/${imageList[i]}`;
  console.log(img.src);
}

const loadingScreen = document.querySelector('.loader-wrapper');

Promise.all(
  Array.from(document.images).map((img) => {
    if (img.complete) return Promise.resolve(img.naturalHeight !== 0);
    return new Promise((resolve) => {
      img.addEventListener('load', () => resolve(true));
      img.addEventListener('error', () => resolve(false));
    });
  })
).then((results) => {
  if (results.every((res) => res)) {
    console.log('all images loaded successfully');
    loadingScreen.style.opacity = '0';
    setTimeout((loadingScreen.style.visibility = 'hidden'), 10);
  } else {
    console.log('Some images failed to load, all finished loading');
    loadingScreen.style.opacity = '0';
    setTimeout((loadingScreen.style.visibility = 'hidden'), 10);
  }
});

function onlyOne(radio) {
  if (document.getElementById(radio).checked == false) {
    console.log('checkeeed');
    document.getElementById(radio).checked = true;
  } else {
    document.getElementById(radio).checked = false;
  }
}
