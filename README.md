# Project 1 - Star Wars Encyclopedia

### By Adrian Garcia

## Project Description
Search through all Star Wars data to find out more facts and information.

 ## API used 
[link text](https://swapi.dev/)


## API desricption
All the Star Wars data you've ever wanted:
Planets, Spaceships, Vehicles, People, Films and Species
From all SEVEN Star Wars films

The Star Wars API is the world's first quantified and programmatically-formatted set of Star Wars data.

After hours of watching films and trawling through content online, we present to you all the People, Films, Species, Starships, Vehicles and Planets from Star Wars.

We've formatted this data in JSON and exposed it to you in a RESTish implementation that allows you to programmatically collect and measure the data.

 ## Example code of you testing it?
        $.ajax("https://swapi.dev/api/")
    .then((data) => {
        console.log(data)
        console.log(data.starships)
    })

    $.ajax("https://swapi.dev/api/starships/")
    .then((data1) => {
        console.log(data1)
        console.log(data1.results[2].name)
    })


## Technologies Used
- HTML5
- CSS3
- Javascript
- jQuery

## mockup
![star wars API mockup](./starwarsmockup.pdf) 

## Timeline

| Day   | Task                       |
| ----- | -------------------------- |
| 1     | Set up & test api          |
| 2     | HTML & css deploy          | 
| 3     | add javascript function    |
| 4     | changes and more styling   |
| 5     | last minute bugs and fixes |


