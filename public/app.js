const imageList = ['antialgae_0000.png', 'bimini_0000.png', 'body_0000.png', 'cupholders_0000.png', 'dorzslec_0000.png', 'guard_0000.png', 'kikotobika_0000.png', 'kikotokarika_0000.png', 'ladder_0000.png', 'noseguard_0000.png', 'upholstery_beige_0000.png', 'upholstery_blue_0000.png'];

const biminiInput = document.getElementById('bimini-input');
const imgBase = document.getElementById('img-base');
let images = document.querySelectorAll('.img-wrapper > img');
let currentView = 0;
let finalPrice = 2167000;

function updatePrice() {
  document.getElementById('final-price').innerHTML = finalPrice.toString().slice(0, -6) + ' ' + finalPrice.toString().slice(1, -3) + ' ' + finalPrice.toString().slice(-3) + ' Ft';
}

updatePrice();

function toggleDropdown(wrapperID) {
  const menu = document.getElementById(wrapperID);
  const icon = document.getElementById(wrapperID + '-icon');
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    icon.style.transform = 'none';
  } else {
    menu.style.display = 'none';
    icon.style.transform = 'rotate(-180deg)';
  }
}

// function switchView(toNext) {
//   if (toNext === true) {
//     if (currentView < 2) {
//       currentView++;
//     } else {
//       currentView = 0;
//     }
//   } else {
//     if (currentView > 0) {
//       currentView--;
//     } else {
//       currentView = 2;
//     }
//   }
//   const images = document.querySelectorAll('.img-wrapper > img');
//   images.forEach((element) => {
//     let source = element.getAttribute('src');
//     source = source.substring(0, source.length - 5).concat(currentView + '.png');
//     element.setAttribute('src', source);
//   });
// }

function showElement(id, elem) {
  const element = document.getElementById(id);
  if (element.style.visibility == 'hidden') {
    element.style.visibility = 'initial';
    finalPrice += parseInt(elem.getAttribute('data-price'));
    updatePrice();
  } else {
    element.style.visibility = 'hidden';
    finalPrice -= parseInt(elem.getAttribute('data-price'));
    updatePrice();
  }
}

function addPrice(elem) {
  if (elem.checked) {
    finalPrice += parseInt(elem.getAttribute('data-price'));
    updatePrice();
  } else {
    finalPrice -= parseInt(elem.getAttribute('data-price'));
    updatePrice();
  }
}

for (let i = 0; i < imageList.length; i++) {
  let img = new Image();
  img.src = `data/${imageList[i]}`;
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
).then(() => {
  loadingScreen.style.visibility = 'hidden';
});

function selectOnlyThis(name) {
  let addedPrice = false;
  let chks = document.getElementsByName(name);
  for (let i = 0; i < chks.length; i++) {
    chks[i].onclick = function () {
      if (addedPrice) {
        finalPrice -= parseInt(this.getAttribute('data-price'));
        updatePrice();
      }
      finalPrice += parseInt(this.getAttribute('data-price'));
      addedPrice = true;
      updatePrice();

      if (this.checked) {
        document.getElementById(this.id).style.visibility = 'initial';
      } else {
        finalPrice -= parseInt(this.getAttribute('data-price'));
        addedPrice = false;
        updatePrice();
        for (let k = 0; k < chks.length; k++) {
          document.getElementById(chks[k].id).style.visibility = 'hidden';
        }
      }
      for (let j = 0; j < chks.length; j++) {
        if (chks[j] != this && this.checked) {
          chks[j].checked = false;
          document.getElementById(chks[j].id).style.visibility = 'hidden';
        }
      }
    };
  }
}

selectOnlyThis('checkbox-upholstery');
