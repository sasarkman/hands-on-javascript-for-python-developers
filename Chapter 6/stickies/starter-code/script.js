const container = document.querySelector('.container') // set .container to a variable so we don't need to find it every time we click
let noteCount = 1 // inital value

// access our button and assign a click handler
document.querySelector('.box-creator-button').addEventListener('click', (e) => {
    

    //  create our DOM element
    let sticky = document.createElement('div');

    // set our class name
    sticky.className = 'box';

    // get our other DOM elements
    let stickyInput = document.querySelector('.box-color-input');
    let stickyNote = document.querySelector('.box-color-note');

    // get our variables
    let color = stickyInput.value;
    let note = stickyNote.value;

    // blank out the input fields
    document.querySelector('.box-color-input').value = "";
    document.querySelector('.box-color-note').value = "";

    // define the attributes
    sticky.style.backgroundColor = color;
    sticky.innerHTML = `${noteCount++}. ${note}`;

    // add the sticky
    container.appendChild(sticky);
    console.log(`Added note: ${note}, color: ${color}`);
});