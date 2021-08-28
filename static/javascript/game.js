function shark_clicked() {
    var hearts = document.getElementById("hearts");

    // If user's hearts are not below or equal to 0
    if (!(hearts.innerHTML <= 0)) {
        var score = document.getElementById("score");
        score.innerHTML = ++score.innerHTML;
    }
}

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
        ["baskingshark", 1],
        ["blueshark", 1],
        ["hammerhead1", 1],
        ["hammerhead2", 2],
        ["morningshark", 3],
        ["whaleshark", 2],
    ]


    shark_type = sharks_list[Math.floor(Math.random() * sharks_list.length)];

    // make this 
    // <img src="static/images/morningshark.png" class="shark" onclick="shark_clicked()" draggable="false" unselectable="on"/>

    var game_container = document.getElementById("game_container")

    var shark = document.createElement("img");
    shark.src = "static/images/" + shark_type[0] + ".png";  

    shark.classList.add("shark");

    shark_name = shark_type[0]
    shark_rarity = shark_type[1]

    shark.setAttribute('alt', shark_type[1]); // Shark rarity

    //shark.setAttribute("onclick","shark_clicked()");

    shark.onclick = function() {
        var hearts = document.getElementById("hearts");

        // If user's hearts are not below or equal to 0
        if (!(hearts.innerHTML <= 0)) {
            shark_rarity = this.alt;
            var score = document.getElementById("score");
            new_score = parseInt(score.innerHTML) + parseInt(shark_rarity);
            console.log(shark_type)

            score.innerHTML = new_score;
        }
    };

    shark.setAttribute('draggable', false);
    shark.setAttribute('unselectable', "on");

    game_container.appendChild(shark);

}

// Spawns a shark every X ms (X is between 1000 to 5000)
setInterval(spawn_shark, Math.floor(Math.random() * (5000 - 1000 + 1000) ) + 1000);