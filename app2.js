// I used snippets of code and ideas on organizing the data from following websites to help build my app:
// https://www.youtube.com/watch?v=Y6fhfs6nBww
// https://www.youtube.com/watch?v=qb6sMTeyLJY
// https://www.youtube.com/watch?v=gX5YqsmAjAs
// https://selftaughttxg.com/2022/04-22/StarWarsAPI-01/

async function getData(value) {
    const res = await fetch(`https://swapi.dev/api/${value}`);
    const data = await res.json();
    // console.log(data)
    displayResults(data, value);
}

// event listener buttons
document.querySelector('#buttons').addEventListener('click', event => {
    getData(event.target.textContent.trim().toLowerCase());

// show loader
document.querySelector('.overlay').classList.add('active');
});

function displayResults(data, value) {
    let output = "";
    // console.log(data);
    if(value === 'films') { 
        data.results.forEach(item => {
            output += `
            <div class="card-content">
                <div class="card card-film">
                    <h2>${item.title}</h2>
                    <div class="content">
                        <span>Episode</span>: ${item.episode_id}<br>
                        <span>Director</span>: ${item.director}<br>
                        <span>Release Date</span>: ${item.release_date}<br>
                        <p class=""> ${item.opening_crawl}</p>
                    </div>
                </div>
            </div>
            `
        }) 
    }
    if(value === 'people') {
        data.results.forEach(item => {
            output += `
            <div class="card-content">
                <div class="card card-people">
                    <h2>${item.name}</h2>
                    <div class="content">
                        <span>Birth Year</span>: ${item.birth_year}<br>
                        <span>Gender</span>: ${item.gender}<br>
                        <span>Skin Color</span>: ${item.skin_color}<br>
                        <span>Eye Color</span>: ${item.eye_color}<br>
                    </div>
                </div>
            </div>
            `
        })
    }
    if(value === 'starships') {
        data.results.forEach(item => {
            output += `
            <div class="card-content">
                <div class="card card-starships">
                    <h2>${item.name}</h2>
                    <div class="content">
                        <span>Manufacturer</span>: ${item.manufacturer}<br>
                        <span>Model</span>: ${item.Model}<br>
                        <span>Starship Class</span>: ${item.starship_class}<br>
                        <span>Hyperdrive Rating</span>: ${item.hyperdrive_rating}<br>
                        <span>Cost</span>: ${item.cost_in_credits}<br>
                        <span>Passengers</span>: ${item.passengers}<br>
                    </div>
                </div>
            </div>
            `
        })
    }
    if(value === 'vehicles') {
        data.results.forEach(item => {
            output += `
            <div class="card-content">
                <div class="card card-vehicles">
                    <h2>${item.name}</h2>
                    <div class="content">
                        <span>Manufacturer</span>: ${item.manufacturer}<br>
                        <span>Model</span>: ${item.Model}<br>
                        <span>Cargo Capacity</span>: ${item.cargo_capacity}<br>
                        <span>Max Atmospheric Speed</span>: ${item.max_atmospheric_speed}<br>
                        <span>Cost</span>: ${item.cost_in_credits}<br>
                        <span>Passengers</span>: ${item.passengers}<br>
                    </div>
                </div>
            </div>    
            `
        })
    }
    if(value === 'species') {
        data.results.forEach(item => {
            output += `
            <div class="card-content">
                <div class="card card-species">
                    <h2>${item.name}</h2>
                    <div class="content">
                        <span>Classification</span>: ${item.classification}<br>
                        <span>Language</span>: ${item.language}<br>
                        <span>Average Height</span>: ${item.average_height}<br>
                        <span>Average Lifespan</span>: ${item.average_lifespan}<br>
                        <span>Designation</span>: ${item.designation}<br>
                    </div>
                </div>
            </div>  
            `
        });    
    };
    document.querySelector('.overlay').classList.remove('active');
    
    results.innerHTML = output;
};

