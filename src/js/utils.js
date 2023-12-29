const container_card = document.createElement("div")
container_card.className = "movies-container-cards"

document.body.append(container_card)

export function сreatCardMovies(item) {
    let image_favorite
    if (item.isFavourite) {
        image_favorite = "./assets/icons/favourite.svg"
    }
    else {
        image_favorite = "./assets/icons/not-favourite.svg"
    }
    const ContainetCardMovies = document.createElement("div")
    ContainetCardMovies.className = "movie-card"
    ContainetCardMovies.dataset.Id = `${item.id}`
    ContainetCardMovies.innerHTML = `<img src="${item.imageUrl}">
    <h3>${item.movieName}</h3>
    <strong>${item.releaseYear}</strong>
    <p>The best movie ever</p>
    <button id="${item.id}" class="movie-card-btn-icon">
        <img src="${image_favorite}">
    </button>`
    container_card.append(ContainetCardMovies)
}

export function removeAllCards() {
    const card = document.querySelectorAll(".movie-card")
    card.forEach(item => {item.remove()})
}

export function renderingMoviesisFavourite(item) {
    if (item.isFavourite) {
        сreatCardMovies(item)
    }
}

export function removeCard(btnId) {
    const card = document.querySelectorAll(".movie-card")
    card.forEach((item, index) => {
        if (item.lastElementChild.id - 1 === btnId) {
            card[index].remove()
        }
    })
}

 







