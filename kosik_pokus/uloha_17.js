let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function(event) {
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);