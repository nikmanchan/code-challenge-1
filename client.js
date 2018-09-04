console.log('js');

$(document).ready(readyNow);

function readyNow() {
    $('#generateButton').on('click', addDiv);
    $('#divContainer').on('click', '#delete', deleteDiv);
    $('#divContainer').on('click', '#swap', changeColor);
} // end readyNow
// declare counter variable
let counter = 0;

function addDiv() {
    // process value addition for click
    addOne();
    // generate div on the dom with appropriate buttons (swap, delete)
    $('#divContainer').append(`
    <div class="redBackground">
        <p>` + counter + `</p>
        <button id="swap">Swap</button>
        <button id="delete">Delete</button>
    </div>
    
    `);
}
// create function for class toggle with color change
function changeColor(){
    $(this).closest('div').toggleClass('yellowBackground');
};
// add value per click
function addOne() {
    counter += 1;
}
// create function for deletion of clicked div
function deleteDiv() {
    console.log('delete was clicked!');
    $(this).closest('div').remove();
}



// Clicking a "Swap" <button> should change its parent background-color from red to yellow (HINT: Research toggleClass).

// Clicking the "Swap" <button> on a yellow div should turn the background-color to red.

// Clicking a "Delete" <button> should remove its parent <div>.

// No need to do anything beyond the challenge described above. Once you are complete, check your code into a GitHub repo and submit via this application.

