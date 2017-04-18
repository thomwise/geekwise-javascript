getElementById("one").addEventListener("click", playGame);

function playGame() {
  var user = prompt("You are walking along the Shire and Gandalf appears asking you on a journey! You can either GO WITH HIM, STAY HOME, or PUNCH HIM AND RUN!").toLowerCase();

  var beard = prompt("How long is your beard? SHORT, LONG, or WHAT BEARD?").toLowerCase();
}

switch (user) {
    case "go with him":
        if (beard == "long") {
            alert("Damn, your beard is long!");
        }
        else {
            alert("You embark on the journey of a lifetime!");
        }
        break;
    case "stay home":
        if (beard == "what beard" || "short") {
        alert("You're super lame, get a bigger beard and get out more often.");
    }
    else {
        alert("You're lame, you need to do something more with your life.");
    }
        break;
    case "punch him and run":
        if (beard == "long")
            alert("You're a sneaky hobbit and your beard grants you some respect from the great wizard, but you better be on your toes...");
        else {
            alert("With one flick of his staff, Gandalf sends you flying into the air and makes you pop like a firework.");
        }
        break;
    default:
        var user = prompt("Please respond either GO WITH HIM, STAY HOME, or PUNCH HIM AND RUN.");
      }


    while (user2 !== "red pill") {
      var user2 = prompt('Gandalf now holds open his hands with a red pill and a blue pill. He says, "The red pill will send you places you have never seen before and the blue pill will make you forget you ever saw me." Do you take the RED PILL or BLUE PILL?');
      if (user2 == "blue pill") {
        alert("Immediately you awake in bed with an overgrown afro wondering what you did at the Prancing Pony the night before. You seem to recall something about a white rabbit...");
      }
    }
    alert("The world swirls around you in a rush of pixels and binary code and you end up in a chair with a wire that just detatch from the back of your head.");

getElementById("one").addEventListener("click", playGame);
