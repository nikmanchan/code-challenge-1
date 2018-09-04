$(document).ready(readyNow);

function readyNow() {
    $('#generateButton').on('click', addDiv);
    $('#divContainer').on('click', '#delete', deleteDiv);
    $('#divContainer').on('click', '#swap', changeColor);
} // end readyNow

// declare counter variable
let counter = 0;

// create function to add div to DOM
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
// create function for click counter
function addOne() {
    counter += 1;
}
// create function for deletion of clicked div
function deleteDiv() {
    console.log('delete was clicked!');
    $(this).closest('div').remove();
}
