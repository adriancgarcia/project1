console.log("hello hello!")

$.ajax("https://swapi.dev/api/")
.then((data) => {
    console.log(data)
    console.log(data.starships)
})

$.ajax("https://swapi.dev/api/starships/")
.then((data1) => {
    console.log(data1)
    console.log(data1.results)
})