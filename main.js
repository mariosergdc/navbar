const menuList = document.querySelectorAll(".menu-item");

function ToggleActive() {
    for (const el of menuList) {
        if (el.classList.contains("active")) {
            el.classList.remove("active")
        }
    }
    this.classList.add("active")
}

for (const el of menuList) {
    el.addEventListener("click",ToggleActive)
}

console.log(menuList) 