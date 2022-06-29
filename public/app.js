const biminiInput = document.getElementById('bimini-input');
const imgBase = document.getElementById('img-base');
let images = document.querySelectorAll('.img-wrapper > img');
let currentView = 0;

function toggleDropdown(wrapperID) {
  const menu = document.getElementById(wrapperID);
  const icon = document.getElementById(wrapperID + '-icon');
  if (menu.style.display === 'none') {
    menu.style.display = 'initial';
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
