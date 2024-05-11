let lastKnownScrollPosition = 0;
let ticking = false;
let logo = document.getElementsByClassName("logo-font")[0]
let logoContainer = document.querySelector(".logo")
let header = document.querySelector(".header-container")

function doSomething(scrollPos) {
    if (scrollPos <= 20) {
        logo.classList.remove("isnotontop")
        logo.classList.add("isontop")

        logoContainer.classList.add("move-down")
        logoContainer.classList.remove("move-up")
        header.classList.remove("header-container-on")
    } else if (scrollPos > 20) {
        
        logo.classList.remove("isontop")
        logo.classList.add("isnotontop")
        logoContainer.classList.remove("move-down")
        logoContainer.classList.add("move-up")
        header.classList.add("header-container-on")
    }

}

document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            doSomething(lastKnownScrollPosition);
            ticking = false;
    });

    ticking = true;
  }
});