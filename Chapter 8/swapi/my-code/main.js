class SWAPI {
    constructor() {
        this.url = 'https://swapi.dev/api/people';
        this.peopleData = {};
        this.loader = document.querySelector('#loader');
        this.peopleElement = document.querySelector('#people');
        this.personElement = document.querySelector('#person');
        this.selectedPerson = document.querySelector('#peopleSelector');
        this.goButton = document.querySelector(".go").addEventListener("click", e => {
            let url = this.selectedPerson.value;
            fetch(url)
                .then(response => response.json())
                .then(json => {
                    this.personElement.querySelector('h2').innerHTML = json.name;
                    this.personElement.querySelector('h3').innerHTML = `Height: ${json.height}`
                    this.personElement.querySelector('h4').innerHTML = `Mass: ${json.mass}`

                    this.personElement.style.visibility = "visible";
                });
        })

        
    }
    toggleElement(element) {
        element.style.visibility = (element.style.visibility == 'visible' || element.style.visibility === '') ? 'hidden' : 'visible';
    }
    getPeople() {
        console.log('getPeople');
        fetch(this.url)
            .then((response) => response.json())
            .then(json => {
                console.log(json);
                this.toggleElement(this.loader);
                this.peopleData = json.results;

                let select = document.querySelector('#peopleSelector');

                for (const key in this.peopleData) {
                    console.log(this.peopleData[key].name);
                    let option = document.createElement('option');
                    option.innerHTML = this.peopleData[key].name;
                    option.value = this.peopleData[key].url;
                    select.appendChild(option);
                }

                this.peopleElement.style.visibility = "visible";
            })
    }
}

const s = new SWAPI().getPeople()
