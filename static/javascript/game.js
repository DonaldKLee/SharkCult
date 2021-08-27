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