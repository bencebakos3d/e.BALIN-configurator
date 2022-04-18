const biminiInput = document.getElementById("bimini-input");
const imgBase = document.getElementById("img-base");
let currentView = 1;

biminiInput.addEventListener("change", () => {
    if (biminiInput.checked) {
        imgBase.setAttribute("src", `img/ebalin_base_${currentView}.jpg` )
    } else {
        imgBase.setAttribute("src", `img/ebalin_base_nobimini_${currentView}.jpg`)
    }
})

function toggleDropdown(wrapperID) {
    const menu = document.getElementById(wrapperID)
    const icon = document.getElementById(wrapperID + "-icon")
    if (menu.style.display === "none") {
        menu.style.display = "initial"
        icon.style.transform = "none"
    } else {
        menu.style.display = "none"
        icon.style.transform = "rotate(180deg)"
    }
}

fetch('/options').then(response => response.json()).then(data => {
    const optionWrappers = document.querySelectorAll('.option');
    optionWrappers.forEach(option => {
        const optionID = parseInt(option.getAttribute("databaseID"));
        option.children[0].innerHTML = data[optionID - 1].name;
    })
})

function switchView(toNext) {
    if (toNext === true) {
        if (currentView < 3) {
            currentView++
        } else {
            currentView = 1
        }
    } else {
        if (currentView > 1 ) {
            currentView--
        } else {
            currentView = 3
        }
    }
    const images = document.querySelectorAll(".configurator-left > img");
    images.forEach(element => {
        let source = element.getAttribute("src");
        source = source.substring(0, source.length - 5).concat(currentView + ".jpg");
        element.setAttribute("src", source)
    })
}
