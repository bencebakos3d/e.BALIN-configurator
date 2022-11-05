const biminiInput = document.getElementById('bimini-input');
const imgBase = document.getElementById('img-base');
let images = document.querySelectorAll('.img-wrapper > img');
let currentView = 0;
let finalPrice = parseInt(document.getElementById('final-price').innerHTML);

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
        if (document.getElementById('backrest-input').checked && this.id.includes('beige')) {
          document.getElementById('backrest-beige').style.visibility = 'initial';
        } else {
          document.getElementById('backrest-beige').style.visibility = 'hidden';
        }
        document.getElementById(this.id).style.visibility = 'initial';
      } else {
        finalPrice -= parseInt(this.getAttribute('data-price'));
        addedPrice = false;
        updatePrice();
        document.getElementById('backrest-beige').style.visibility = 'hidden';
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

const backrestInput = document.getElementById('backrest-input');
backrestInput.onclick = function () {
  if (!document.getElementById('backrest-input').checked) {
    document.getElementById('backrest-beige').style.visibility = 'hidden';
  }
  if (document.getElementById('backrest-input').checked && document.querySelector('.upholstery-beige').checked) {
    console.log('helloooo checked');
    document.getElementById('backrest-beige').style.visibility = 'initial';
  }
};

selectOnlyThis('checkbox-upholstery');
