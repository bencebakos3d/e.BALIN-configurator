const biminiInput = document.getElementById("bimini-input");
const imgBase = document.getElementById("img-base");

biminiInput.addEventListener("change", () => {
    if (biminiInput.checked) {
        console.log("checked")
        imgBase.setAttribute("src", "img/ebalin_base_nobimini.jpg" )
    } else {
        imgBase.setAttribute("src", "img/ebalin_base.jpg")
    }
})

function toggleDropdown(wrapperID) {
    const menu = document.getElementById(wrapperID)
    const icon = document.getElementById(wrapperID + "-icon")
    if (menu.style.visibility === "hidden") {
        menu.style.visibility = "initial"
        icon.style.transform = "none"
    } else {
        menu.style.visibility = "hidden"
        icon.style.transform = "rotate(180deg)"
    }
}