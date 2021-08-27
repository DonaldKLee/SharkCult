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
    // make this 
    // <img src="static/images/morningshark.png" class="shark" onclick="shark_clicked()" draggable="false" unselectable="on"/>

    var game_container = document.getElementById("game_container")

    var shark = document.createElement("img");
    shark.src = "static/images/morningshark.png";  

    shark.classList.add("shark");

    //shark.setAttribute("onclick","shark_clicked()");

    shark.onclick = function() {
        
    };

    shark.setAttribute('draggable', false);
    shark.setAttribute('unselectable', "on");

    game_container.appendChild(shark);

}

setInterval(spawn_shark, 3000)