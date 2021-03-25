var image = document.getElementsByClassName("image")[0]
var body = document.getElementsByTagName("body")[0]
var conteiner = document.getElementsByClassName("conteiner")[0]
var buttons = document.getElementsByTagName("button")

function change (background, display) {
    for (i in buttons) {
        buttons[i].style.background = background
        buttons[i].style.display = display
    }
}

function changeLight(action) {
    if (action === "on") {
        image.setAttribute("src", "images/light-on.jpg")
        body.style.background = "#FFDE3B"
        conteiner.style.boxShadow = "0 0 20px #d4b00d"
        change("#FFDE3B")
    }

    if (action === "off") {
        image.setAttribute("src", "images/light-off.jpg")
        body.style.background = "#98a2a7"
        conteiner.style.boxShadow = "0 0 20px #56686c"
        change("#98a2a7")
    }
    if (action === "broken") {
        alert("Olá, parece que você quebrou a lâmpada. Por favor, atualize a página.")
        image.setAttribute("src", "images/light-broken.jpg")
        body.style.background = "#98a2a7"
        body.style.cursor = "not-allowed" 
        conteiner.style.boxShadow = "0 0 20px #56686c"
        change("#98a2a7", "none")
    }

}


