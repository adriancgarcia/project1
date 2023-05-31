// I used snippets of code and ideas on organizing the data from different websites to help build my app
// https://www.youtube.com/watch?v=Y6fhfs6nBww
// https://www.youtube.com/watch?v=qb6sMTeyLJY
// https://www.youtube.com/watch?v=gX5YqsmAjAs

const results = document.querySelector('#results');

async function asyncFetch(value) {
    const res = await fetch(`https://swapi.dev/api/${value}`);
    const data = await res.json();
    console.log(data)
    displayResults(data, value);
}

function displayResults(data, value) {
    let output = "";
    // console.log(data);
    if(value === 'films') {
        data.results.forEach(item => {
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
                        <span>Home World</span>: ${item.home_world}<br>
                        <span>Films</span>: ${item.films}<br>
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
                        <span>Pilots</span>: ${item.pilots}<br>
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
                    <span>Cargo Capaccity</span>: ${item.cargo_capacity}<br>
                    <span>Max Atmospheric Speed</span>: ${item.max_atmospheric_speed}<br>
                    <span>Cost</span>: ${item.cost_in_credits}<br>
                    <span>Pilots</span>: ${item.pilots}<br>
                    <span>Passengers</span>: ${item.passengers}<br>
                    </div>
                </div>
            `
        })

    //     .catch (() => {
    //     $result.html(`<div> there was an error...</div>`)
    // });
    }
    results.innerHTML = output;
}

// event listemer buttons
document.querySelector('#buttons').addEventListener('click', e => {
    e.preventDefault();
    asyncFetch(e.target.textContent.trim().toLowerCase());
})