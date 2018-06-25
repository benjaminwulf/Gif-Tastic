$(document).ready(function(){

// Initial array of gifs
var gifArr = ["Tiger Woods", "Dustin Johnson", "Justin Thomas", "Jordan Spieth", "Rory McIlroy", "Rickie Fowler", "Jason Day", "Tommy Fleetwood", "Bubba Watson", "John Daly"];

// Create function to display gifs
function createButtons() {

    // Delete buttons prior to adding new buttons
    // In order to not have repeated buttons
    $("#gif-view").empty();

    // Loop through the array gifArr
    for (var i = 0; i < gifArr.length; i++) {

        // Dynamically generate buttons for each item in array gifArr
        var a = $("<button>");
        // Add class
        a.addClass("gif");
        // Add data-attribute with the value of gif at index i
        a.attr("data-name", gifArr[i]);
        // Create button text with value of gif at index i
        a.text(gifArr[i]);
        // Add the button to the HTML
        $("#gif-view").append(a);
        console.log("createButtons pushed");
    }
};

// Handle event click
$("#add-gif").on('click', function(event) {
    // event.preventDefault() is used to stop from from submitting itself
    // User can click or press enter to add
    event.preventDefault();

    // Grab the text form the input box and trim excess whitespace
    var gif = $("#gif-input").val().trim();
    
    gifArr.push(gif);
    // Call createButtons() to process array gifArr
    createButtons();
    });

    // Call createButtons to display initial gifs
    createButtons();
});