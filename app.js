// console.log("hello hello!")

const addSquare = (results) => {
    const square = document.createElement("div")
    square.classList.add("square")
    square.innerHTML = `<h2>${results}</h2>`
    const container = document.querySelector(".results-container")
    container.append(square)
}


// $.ajax("https://swapi.dev/api/")
// .then((data) => {
//     console.log(data) 
//     console.log(data.results)
//     addSquare(data.results)
// })


const showResultMakeSquare = () => {

    $.ajax("https://swapi.dev/api/people/?search")
    .then((data1) => {
        console.log(data1)
        console.log(data1)
        addSquare(data1)
    }) 
} 

// showResultMakeSquare ()

// const input = document.querySelector("input")
// input.addEventListener("click", showResultMakeSquare)