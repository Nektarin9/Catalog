import {saveLS, readLS} from "./src/js/LS.js"
import {movies} from "./src/data/movies.js"
import {сreatCardMovies, renderingMoviesisFavourite, removeAllCards, removeCard} from "./src/js/utils.js"


class MovieGallery {
    buttonState = false
    constructor (data) {
        this.data = readLS() || data 
        this.#renderingMovies()
    }
    #renderingMovies() {
        this.data.forEach(item => {
            сreatCardMovies(item)
        })
    }
    #chooseFavouritMovie() {
        const containerCard = document.querySelector(".movies-container-cards")
        containerCard.addEventListener("click", event => {
            let {target} = event
            let selectBtn = target.closest('button')
            if (selectBtn) {
                let btnId = target.closest('button').id - 1
                if(this.data[btnId].isFavourite) {
                    this.data[btnId].isFavourite = false
                    saveLS(this.data)
                    selectBtn.innerHTML = `<img src="./assets/icons/not-favourite.svg">`
                    if (this.buttonState) {
                        removeCard(btnId)
                    }
                }
                else {
                    this.data[btnId].isFavourite = true
                    selectBtn.innerHTML = `<img src="./assets/icons/favourite.svg">`
                    saveLS(this.data)
                }
            } 
        })
    }
    setAllMovies() {
        this.#chooseFavouritMovie()
        const btn = document.querySelector(".movies-container-switch-list")
        this.buttonState = false
        btn.addEventListener("click", event => {
            removeAllCards()
            if (this.buttonState) {
                btn.textContent = "Click me to see Favourite Movies"
                this.#renderingMovies()
                this.buttonState = false
            }
            else {
                removeAllCards()
                btn.textContent = "Click me to see All movies"
                this.data.forEach(item => {
                    renderingMoviesisFavourite(item)
                })
                this.buttonState = true
            }
        })
    }
    
}

const Gallery = new MovieGallery(movies)
Gallery.setAllMovies()



