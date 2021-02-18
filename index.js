let quotesDiv = document.getElementById("quotes")

fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p> ${quote.quote} </p>`
})

let someButton = document.getElementById("some")
someButton.addEventListener("click", e => {
    let imageDiv = document.getElementById("image")
    fetch("https://api.thecatapi.com/v1/images/search?")
    .then(res => res.json())
    .then(images => {
        images.forEach(image => {
            imageDiv.innerHTML = `<h3>This cat is wishing you the best day</h3>
            <img src="${cat.url}" alt="cat" />`
        });
    })
})