document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var buttons = document.querySelectorAll(".btn-primary"); // Select all buttons with class "btn-primary"
    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var span = document.getElementsByClassName("close")[0];
    // Loop through all buttons and add click event listener
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function() {
            modal.style.display = "block";
        }

        if (i == 0) {
            title.innerHTML = "Project 1";
            description.innerHTML = "This is a description for project 1";
        } else if (i == 1) {
            title.innerHTML = "Project 2";
            description.innerHTML = "This is a description for project 2";
        } else if (i == 2) {
            title.innerHTML = "Project 3";
            description.innerHTML = "This is a description for project 3";
        } else if (i == 3) {
            title.innerHTML = "Project 4";
            description.innerHTML = "This is a description for project 4";
        } else if (i == 4) {
            title.innerHTML = "Project 5";
            description.innerHTML = "This is a description for project 5";
        } else if (i == 5) {
            title.innerHTML = "Project 6";
            description.innerHTML = "This is a description for project 6";
        } else if (i == 6) {
            title.innerHTML = "Project 7";
            description.innerHTML = "This is a description for project 7";
        }
    }
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    });