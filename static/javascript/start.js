// ------- Changes the fact every 10 seconds -------
var facts = ["Some fish clean shark mouths.","Most sharks have good eyesight.","Sharks have special electroreceptor organs.","Shark skin feels similar to sandpaper.","Sharks can go into a trance.", "Sharks have been around a very long time.","Scientists age sharks by counting the rings on their vertebrae.","Blue sharks are really blue.","Each whale shark’s spot pattern is unique as a fingerprint."," Not all sharks have the same teeth.","Different shark species reproduce in different ways.","The whaleshark is not part whale.", "Sharks are cool!"];

the_fact = facts[Math.floor(Math.random() * facts.length)];
document.getElementById("fact").innerHTML = the_fact;

function changefact() {
    // List of shark facts
    the_fact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("fact").innerHTML = the_fact;
}

setInterval(changefact, 10000);
// ------- Changes the fact every 10 seconds ^^^ -------


function spawn_shark() {
   
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

    var game_container = document.getElementById("menu_container")

    var shark = document.createElement("img");
    shark.src = "static/images/" + shark_type + ".png";  

    shark.classList.add("shark");

    if (Math.random() < 0.5) { // 50% chance of the shark moving from right to left
        shark.classList.add("right_shark");
    }
    else {
        shark.classList.add("left_shark");
    }

    shark_speed = 1.2;
    

    shark.setAttribute("style", "animation-duration:" + shark_speed + "s;");

    if (Math.random() < 0.3) { // 30% chance of a backwards shark
        shark.setAttribute("style", "animation-duration:" + shark_speed + "s; transform: scaleX(-0.5) scaleY(0.5);");
    }

    shark.setAttribute('draggable', false);
    shark.setAttribute('unselectable', "on");


    // If the shark isn't captured
    shark.addEventListener("animationend", function() {
        this.remove();
    });

    game_container.appendChild(shark);
}

// Spawns a shark every X ms (X is between 1000 to 3000)
setInterval(spawn_shark, Math.floor(Math.random() * (3000) ) + 1000);


