const biminiInput = document.getElementById("bimini-input");
const imgBase = document.getElementById("img-base");

biminiInput.addEventListener("change", () => {
    if (biminiInput.checked) {
        imgBase.setAttribute("src", "img/ebalin_base.jpg" )
    } else {
        imgBase.setAttribute("src", "img/ebalin_base_nobimini.jpg")
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

function toggleOptionDetails(element) {
    
}
