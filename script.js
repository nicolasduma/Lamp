let body = document.getElementsByTagName("body")[0]
let image = document.getElementsByClassName("image")[0]
let conteiner = document.getElementsByClassName("conteiner")[0]
let buttons = document.getElementsByTagName("button")

function change (classRemoveColor, classAddColor, classAddDisplay) {
    body.classList.remove(classRemoveColor)
    body.classList.add(classAddColor)
    for (i in buttons) {
        buttons[i].classList.remove(classRemoveColor)
        buttons[i].classList.add(classAddColor)
        buttons[i].classList.add(classAddDisplay)
    }
}

function changeLight(action) {
    if (action === "on") {
        image.setAttribute("src", "images/light-on.jpg")
        change("light-off", "light-on")
    }

    if (action === "off") {
        image.setAttribute("src", "images/light-off.jpg")
        change("light-on", "light-off")
    }

    if (action === "broken") {
        alert("Olá, parece que você quebrou a lâmpada. Por favor, atualize a página.")
        image.setAttribute("src", "images/light-broken.jpg")
        body.classList.add("cursor-not-allowed")
        change("light-on", "light-off", "display-none")
    }
}
