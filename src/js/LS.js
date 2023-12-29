

export function saveLS(item) {
    const ls = JSON.stringify(item)
    localStorage.setItem("movies", ls)
}

export function readLS() {
    const ls = localStorage.getItem("movies")
    return JSON.parse(ls)
}