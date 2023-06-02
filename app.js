const $searchForm = $("form");

$searchForm.on("submit", event => {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    const starwars = formData.get("movies")//.toLowerCase();
    
    const url =`https://swapi.dev/api/films/`

    console.log(url)

    // $.ajax(url)
    // .then(response => console.log(response))

const $imageArea = $(".imageArea") 
const $result = $(".results")

// $('[name="starwars"]')[0].value = "";

// show loader
document.querySelector('.overlay').classList.add('active');

// $imageArea.e mpty();
// $result.html(`<div>Loading...</div>`);

    fetch (url)
    .then(response => {
        return response.json();
    })
    .then((data) => {
        let films = document.getElementById('results');
        // let films = data.results;
        console.log(data);

        films.innerHTML = data.results.map((item) => {
            let nextFilm = item.name || item.title;
            return `<div>
                    <b> name: </b> ${nextFilm}
                    </div>;`;
        })
        .join (' ');

        // getFilms(films);

        // stats.innerHTML = JSON.stringify(data.name);
        
        // $imageArea.html(
            // `<img src=${data.name} alt=${data.name}>`   
})

        .catch (() => {
        $result.html(`<div> there was an error...</div>`)  
        // console.log("request error") 

    });

    // const getFilms = (films) => {
    //     console.log(films);
    //     let output = ``;
    //     films.forEach((element, index) => {
    //         let titleFilm = element.title;
    //         let episodeFilm = element.episode_id;
    //         let characters = element.characters;
    //     })
    // }


});


    
    // $result.html(`

    // <div>
    // <b>name: </b> ${data.name('')}
    // </div>

    // <div>
    // <b>birthyear: </b> ${data.birthyear()}
    // </div>

    // <div>
    // <b>species: </b> ${data.species[0]}
    // </div>

    // <div>
    // <b>species: </b> ${data.homeworld()}
    // </div>

    // <div>
    // <b>films: </b> ${data.films()}
    // </div>

    // <div>
    // <b>vehicles: </b> ${data.results[index].vehicles[0]}
    // </div>

    // <div>
    // <b>starships: </b> ${data.results[index].starships[0]}
    // </div>
    
    // `)

    // console.log($.result)


    // .catch (() => {
    //     $result.html(`<div> there was an error...</div>`)
    // });





// $('[name="starwars"]')[0].value = "";

// $imageArea.empty();
// $result.html(`<div>Loading...</div>`);

//     fetch (url)
//         .then (response => {
//             return response.json();
//         })
//         .then(data => {
//             $imageArea.html(
//                 `<img src= ${data.results.starships} alt=${data.name}>`
//             );
//             $result.html(`
//             <div>
//             <b>name: </b> ${data.name}`
//             )
//         });