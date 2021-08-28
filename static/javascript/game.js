function hearts_used() {
    var hearts = document.getElementById("hearts");

    // If user's hearts are not below or equal to 0

    if (!(hearts.innerHTML <= 0)) {
        hearts.innerHTML = --hearts.innerHTML;
    }

   else {
       console.log("Game over!")
   }
}

function spawn_shark() {
    //var sharks_list = ["baskingshark", "blueshark", "hammerhead1", "hammerhead2", "morningshark", "whaleshark"]

    var sharks_list = [
        "blahaj",
        "baskingshark",
        "blueshark",
        "hammerhead1",
        "hammerhead2",
        "morningshark",
        "whaleshark",
    ]


    shark_type = sharks_list[Math.floor(Math.random() * sharks_list.length)];

    // make this 
    // <img src="static/images/morningshark.png" class="shark" onclick="shark_clicked()" draggable="false" unselectable="on"/>

    var game_container = document.getElementById("game_container")

    var shark = document.createElement("img");
    shark.src = "static/images/" + shark_type + ".png";  

    shark.classList.add("shark");

    shark_name = shark_type
    //shark_points = shark_type[1]

    shark_stats = Math.floor(Math.random() * (5)) + 1;
    shark_speed = 4.5/shark_stats;

    shark.setAttribute("style", "animation-duration:" + shark_speed + "s;");

    if (Math.random() < 0.3) {
        shark.setAttribute("style", "animation-duration:" + shark_speed + "s; transform: scaleX(-0.5) scaleY(0.5);");
    }

    shark.setAttribute('alt', shark_stats); // Shark points

    shark.addEventListener("animationend", function() {
        if (!(this.alt === "captured_shark")) {
            this.remove();
        }
    });

    shark.onclick = function() {
        var hearts = document.getElementById("hearts");

        // If user's hearts are not below or equal to 0
        if (!(hearts.innerHTML <= 0)) {
            shark_points = this.alt;
            var score = document.getElementById("score");
            new_score = parseInt(score.innerHTML) + parseInt(shark_stats);
            console.log(shark_type)

            score.innerHTML = new_score;
            hearts.innerHTML = ++hearts.innerHTML; // Doesn't lose heart if also clicks
            // Make it stay and move around
            shark.setAttribute('alt', "captured_shark"); // Shark points

            //this.remove();
        }
    };

    shark.setAttribute('draggable', false);
    shark.setAttribute('unselectable', "on");

    game_container.appendChild(shark);

}

// Spawns a shark every X ms (X is between 1000 to 5000)
setInterval(spawn_shark, Math.floor(Math.random() * (5000 - 1000 + 1000) ) + 1000);

// Use JS to set animation duration

