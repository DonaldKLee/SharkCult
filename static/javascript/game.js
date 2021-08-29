const highest_score = localStorage.getItem('highest_score');
if (highest_score) {
    document.getElementById("highest_score").innerHTML = highest_score;
}

function game_over() {
    console.log("Game over!")
    var game_over_sign = document.getElementById("gameover");
    game_over_sign.style.display = "block";
    game_over_sign.classList.add("show_gameover");

    var score = document.getElementById("score").innerHTML;
    var score_form = document.getElementById("submit_score");
    submit_score.value = score;

    document.getElementById("gameover_score").innerHTML = score;
    
    // If new high score
    if (parseInt(score) > parseInt(document.getElementById("highest_score").innerHTML)) {
        localStorage.setItem('highest_score', score);
        document.getElementById("highest_score").innerHTML = score;
        document.getElementById("score_text").innerHTML = "New Record: ";
    }

    document.getElementById("gameover_score").innerHTML = score;
}

function hearts_used() {
    var hearts = document.getElementById("hearts");

    // If user missed 10 or more times

    if (!(hearts.innerHTML >= 10)) {
        hearts.innerHTML = ++hearts.innerHTML;

        if (hearts.innerHTML >= 10) {
            game_over()
        }
    }

   else {
       game_over()
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

    if (Math.random() < 0.5) { // 50% chance of the shark moving from right to left
        shark.classList.add("right_shark");
    }
    else {
        shark.classList.add("left_shark");
    }

    shark_name = shark_type

    shark_points = Math.floor(Math.random() * (5)) + 1;
    if (shark_points === 5) {
        shark_speed = 0.2;
    }

    if (shark_points === 4) {
        shark_speed = 0.3;
    }

    if (shark_points === 3) {
        shark_speed = 0.5;
    }

    if (shark_points === 2) {
        shark_speed = 0.8;
    }

    else {
        shark_speed = 1;
    }

    shark.setAttribute("style", "animation-duration:" + shark_speed + "s;");

    if (Math.random() < 0.3) { // 30% chance of a backwards shark
        shark.setAttribute("style", "animation-duration:" + shark_speed + "s; transform: scaleX(-0.5) scaleY(0.5);");
    }

    // Give it random keyframes


    // Or just a different left and top

    // Maybe have one have a right keyframes (Make another keyframes)


    shark.setAttribute('alt', shark_points); // Shark points

    // If the shark isn't captured
    shark.addEventListener("animationend", function() {
        if (!(this.alt === "captured_shark")) {
            this.remove();
        }
    });

    shark.onclick = function() {
        var hearts = document.getElementById("hearts");

        // If user's hearts are not below or equal to 0 and the shark is wild
        if (!(hearts.innerHTML <= 0) && !(this.alt === "captured_shark")) {
            shark_points = this.alt;
            var score = document.getElementById("score");
            new_score = parseInt(score.innerHTML) + parseInt(shark_points);
            console.log(shark_type)

            score.innerHTML = new_score;
            hearts.innerHTML = --hearts.innerHTML; // Doesn't lose heart if also clicks
            
            // Make it stay and move around
            shark.setAttribute('alt', "captured_shark"); // Shark points


            shark.animate([
                // keyframes
                { transform: 'scale(0.25) translateY(-100px) rotate(0deg)', left: '' + (Math.floor(Math.random() * (10) ) + 0) + '%'},
                { transform: 'scale(0.25) translateY(40px) rotate(30deg)', left: '' + (Math.floor(Math.random() * (65) ) + 60) + '%'}
            ], {
                // timing options
                duration: Math.floor(Math.random() * (6000) ) + 5000,
                iterations: Infinity,
                direction: "alternate"
            });

            var tamed = document.getElementById("tamed");
            tamed.innerHTML = ++tamed.innerHTML;
        }
    };

    shark.setAttribute('draggable', false);
    shark.setAttribute('unselectable', "on");

    game_container.appendChild(shark);

}

// Spawns a shark every X ms (X is between 1000 to 5000)
setInterval(spawn_shark, Math.floor(Math.random() * (5000) ) + 1000);

setInterval(spawn_shark, Math.floor(Math.random() * (5000) ) + 1000);





