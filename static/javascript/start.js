var facts = ["Some fish clean shark mouths.","Most sharks have good eyesight.","Sharks have special electroreceptor organs.","Shark skin feels similar to sandpaper.","Sharks can go into a trance.", "Sharks have been around a very long time.","Scientists age sharks by counting the rings on their vertebrae.","Blue sharks are really blue.","Each whale shark’s spot pattern is unique as a fingerprint."," Not all sharks have the same teeth.","Different shark species reproduce in different ways.","The whaleshark is not part whale.", "Sharks are cool!"];

the_fact = facts[Math.floor(Math.random() * facts.length)];
document.getElementById("fact").innerHTML = the_fact;

function changefact() {
    // List of shark facts
    the_fact = facts[Math.floor(Math.random() * facts.length)];

    document.getElementById("fact").innerHTML = the_fact;
}

setInterval(changefact, 10000);