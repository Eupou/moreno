let knowMoreBtn = document.getElementById("knowMore")
let modalBackground = document.getElementById("modalBackground")
let closeModalBtn = document.getElementById("closeModal")


function openModal(modal) {
    modalBackground.classList.add("visible")
    modal.classList.add("modal-visible")
    document.body.style.overflow = "hidden"
}

function closeModal(modal) {
    modalBackground.classList.remove("visible")
    modal.classList.remove("modal-visible")
    document.body.style.overflow = ""
}

knowMoreBtn.addEventListener("click", () => {
    let modal = document.getElementById("modalKnowMore")
    openModal(modal)
})

closeModalBtn.addEventListener("click", () => {
    let modal = document.querySelector(".modal-visible")
    closeModal(modal)
})

window.addEventListener("click", (e) => {
    if (e.target.id == "modalBackground") {
        let modal = document.querySelector(".modal-visible")
        closeModal(modal)
    }
})