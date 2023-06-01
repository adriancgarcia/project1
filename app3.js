// I used snippets of code and ideas on organizing the data from different websites to help build my app
// https://www.youtube.com/watch?v=Y6fhfs6nBww
// https://www.youtube.com/watch?v=qb6sMTeyLJY
// https://www.youtube.com/watch?v=gX5YqsmAjAs
// https://selftaughttxg.com/2022/04-22/StarWarsAPI-01/

// const results = document.querySelector('#results');

const addSquare = (results) => {
    const square = document.createElement("div")
    square.classList.add("square")
    square.innerHTML = `<h5>${results}</h5>`
    const container = document.querySelector(".data-container")
    container.append(square)
}


async function asyncFetch(value) {
    const res = await fetch(`https://swapi.dev/api/${value}`);
    const data = await res.json();
    console.log(data)
    displayResults(data, value);
}

// const film

function displayResults(data, value) {
    let output = "";
    // console.log(data);
    if(value === 'films') {
        data.results.forEach(item => {
            
            addSquare()
            output += `
                <div>
                
                    <h4>${item.title}</h4>
                    <div class="content">
                        <span>Episode</span>: ${item.episode_id}<br>
                        <span>Director</span>: ${item.director}<br>
                        <span>Release Date</span>: ${item.release_date}<br>
                        <p class=""> ${item.opening_crawl}</p>
                    </div>
                </div>
            `
        }) 
    }
    if(value === 'people') {
        data.results.forEach(item => {
            output += `
                <div>
                    <h4>${item.name}</h4>
                    <div class="content">
                        <span>Birth Year</span>: ${item.birth_year}<br>
                        // <span>Home World</span>: ${item.home_world}<br>
                        // <span>Films</span>: ${item.films.join(' , ')}<br>
                        <span>Skin Color</span>: ${item.skin_color}<br>
                    </div>
                </div>
            `
        })
    }
    if(value === 'starships') {
        data.results.forEach(item => {
            output += `
                <div>
                    <h4>${item.name}</h4>
                    <div class="content">
                        <span>Manufacturer</span>: ${item.manufacturer}<br>
                        <span>Model</span>: ${item.Model}<br>
                        <span>Starship Class</span>: ${item.starship_class}<br>
                        <span>Hyperdrive Rating</span>: ${item.hyperdrive_rating}<br>
                        <span>Cost</span>: ${item.cost_in_credits}<br>
                        <span>Passengers</span>: ${item.passengers}<br>

                    </div>
                </div>
            `
        })
    }
    if(value === 'vehicles') {
        data.results.forEach(item => {
            output += `
                <div>
                    <h4>${item.name}</h4>
                    <div class="content">
                        <span>Manufacturer</span>: ${item.manufacturer}<br>
                        <span>Model</span>: ${item.Model}<br>
                        <span>Cargo Capacity</span>: ${item.cargo_capacity}<br>
                        <span>Max Atmospheric Speed</span>: ${item.max_atmospheric_speed}<br>
                        <span>Cost</span>: ${item.cost_in_credits}<br>
                        <span>Passengers</span>: ${item.passengers}<br>
                    </div>
                </div>
            `
        })
    }

    if(value === 'species') {
        data.results.forEach(item => {
            output += `
                <div>
                    <h4>${item.name}</h4>
                    <div class="content">
                        <span>Classification</span>: ${item.classification}<br>
                        <span>Home World</span>: ${item.homeworld}<br>
                        <span>Language</span>: ${item.language}<br>
                        <span>Average Height</span>: ${item.average_height}<br>
                        <span>Average Lifespan</span>: ${item.average_lifespan}<br>
                        <span>Designation</span>: ${item.designation}<br>
                    </div>
                </div>
                `
            })
        }

    //     .catch (() => {
    //     $result.html(`<div> there was an error...</div>`)
    // });

    results.innerHTML = output;
};



// event listener buttons
document.querySelector('#buttons').addEventListener('click', event => {
    event.preventDefault();
    asyncFetch(event.target.textContent.trim().toLowerCase());
});



let footer = document.getElementById('footer');
footer.innerHTML = '';

if(data.previous) {

    let prev = document.createElement('a');
    prev.href = data.previous;
    let url = new URL(data.previous);
    let labels = url.pathname.split('/');
    let label = labels[labels.length - 2];
    prev.textContent = `<< Previous} ${label}`;
    prev.setAttribute('next', data.previous);
    footer.append(prev) 
}
if (data.next) {

}

