let name = '',
  planet = '',
  films = [],
  filmNames = ''
let hello = "Hello! My name is {name} and I'm from {planet}. I've been in {films} and I'm a Jedi."

fetch('https://swapi.dev/api/people/1/')
  // write your code here.
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);

    name = json.name;
    planetURL = json.homeworld;
    films = json.films;

    console.log(`films = ${films}`)

    fetch(planetURL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        planet = json.name;

        filmPromise = new Promise((resolve, reject) => {
          let counter = 0;
          films.forEach((filmNameURL) => {
            console.log(`Trying: ${filmNameURL}`)
            fetch(filmNameURL)
            .then((response) => {
              return response.json();
            })
            .then((json) => {
              filmName = json.title;
              filmNames = (filmNames == '') ? filmName : filmNames + ", " + filmName;

              if(++counter == films.length) {
                resolve();
              }
            })
          })
        })
        .then(() => {
          hello = hello.replace('{name}', name).replace('{planet}', planet).replace('{films}', filmNames)
          document.querySelector('#main').innerHTML = hello
        })
      })
      

    
  })
    
