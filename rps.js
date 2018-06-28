var rock = document.getElementById("rock");
var normal = document.getElementById("normal");
var fire = document.getElementById("fire");
var water = document.getElementById("water");
var electric = document.getElementById("electric");
var grass = document.getElementById("grass");
var ice = document.getElementById("ice");
var fighting = document.getElementById("fighting");
var poison = document.getElementById("poison");
var ground = document.getElementById("ground");
var flying = document.getElementById("flying");
var psychic = document.getElementById("psychic");
var bug = document.getElementById("bug");
var ghost = document.getElementById("ghost");
var dragon = document.getElementById("dragon");
var dark = document.getElementById("dark");
var steel = document.getElementById("steel");
var fairy = document.getElementById("fairy");

var playerChoice;

rock.onclick = function choseRock() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. You win!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You win!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. You lost...")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You lost...")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You win!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You lost...")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You lost...")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You won!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You win!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. It's a tie!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost ...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

normal.onclick = function choseNormal() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. It's a tie!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You lost...")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. It's a tie!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. It's a tie!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You lost...")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost ...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

fire.onclick = function choseFire() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. You lost...")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You won!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You won!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You lost...")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You won!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You lost...")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. You lost...")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You won!")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. You win!")
    }
}

water.onclick = function choseWater() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You win!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. You lose...")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You lose...")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You win!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You win!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. It's a tie!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You win!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You win!")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

electric.onclick = function choseElectric() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie1")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. You win!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You lose...")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You lost...")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You win!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. It's a tie!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You lose...")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. You lose...")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You win!")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

grass.onclick = function choseGrass() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You lose...")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. You win!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. You win!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. It's a tie!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You lost...")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. You lost...")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You win!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You lost...")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You lost...")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You win!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. You lose...")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

ice.onclick = function choseIce() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You lost...")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. You lost...")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You won!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You lost...")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You won!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You won!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. It's a tie!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You lose...")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. You won!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

fighting.onclick = function chosefighting() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. You won!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. It's a tie!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You won!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. You lost...")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. It's a tie!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You lost...")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. You lost...")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You lost...")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You won!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. You lost...")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie...")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. You won!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You won!")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. You lost...")
    }
}

poison.onclick = function chosePoison() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You won!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You won!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You lost...")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You lost...")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You won!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You lost...")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. You won!")
    }
}

ground.onclick = function choseGround() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You won!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. You lost...")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. You won!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You lost...")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You lost...")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. You won!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. It's a tie!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You lost...")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You lose...")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You win!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You win!...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

flying.onclick = function choseFlying() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. You lost...")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You win!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You lost...")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You win!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You win!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You win!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You lost...")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. You win!")
    }
}

psychic.onclick = function chosePsychic() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. It's a tie!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You win!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. You win!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. It's a tie!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You lost...")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. It's a tie!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. You lost...")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. You lost...")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

bug.onclick = function choseBug() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You lost...")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You win!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. You lose...")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. You win!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You lost...")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. You win!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. It's a tie!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You lost...")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. You lost...")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. You lost...")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. You lost...")
    }
}

ghost.onclick = function choseGhost() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. It's a tie!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. It's a tie!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. You win!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You win!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. It's a tie!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. You lost...")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. It's a tie!")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}

dragon.onclick = function choseDragon() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You win!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. You win!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. You win!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You win!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You lose...")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. It's a tie!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. It's a tie!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. It's a tie!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. It's a tie!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. You lost...")
    }
}

dark.onclick = function choseDark() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. It's a tie!")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. It's a tie!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You lose...")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. It's a tie!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. It's a tie!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. You win!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You lost...")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. It's a tie!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. You win!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. It's a tie!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. It's a tie!")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. You lost...")
    }
}

steel.onclick = function choseSteel() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. You win!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You lost...")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. You win!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. You win!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You lose...")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. You win!")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. you lose...")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. You win!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. You win!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You win!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. You win!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. You win!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. It's a tie!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. It's a tie!")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. You win!")
    }
}

fairy.onclick = function choseFairy() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function computerPick() {
        var random = getRandomInt(18);

        return random;
    }

    var computerChoice = computerPick();
    playerChoice = 12;

    var normal = 0;
    var fire = 1;
    var water = 2;
    var electric = 3;
    var grass = 4;
    var ice = 5;
    var fighting = 6;
    var poison = 7;
    var ground = 8;
    var flying = 9;
    var psychic = 10;
    var bug = 11;
    var rock = 12;
    var ghost = 13;
    var dragon = 14
    var dark = 15
    var steel = 16;
    var fairy = 17;

    if (computerChoice === normal) {
        alert("The computer chose normal. It's a tie!");
    }
    else if (computerChoice === fire) {
        alert("The computer chose fire. You lost...")
    }
    else if (computerChoice === water) {
        alert("The computer chose water. It's a tie!")
    }
    else if (computerChoice === electric) {
        alert("The computer chose electric. It's a tie!")
    }
    else if (computerChoice === grass) {
        alert("The computer chose grass. It's a tie!")
    }
    else if (computerChoice === ice) {
        alert("computer chose ice. It's a tie!")
    }
    else if (computerChoice === fighting) {
        alert("computer chose fighting. You win!")
    }
    else if (computerChoice === poison) {
        alert("computer chose poison. You lost...")
    }
    else if (computerChoice === ground) {
        alert("computer chose ground. It's a tie!")
    }
    else if (computerChoice === flying) {
        alert("computer chose flying. It's a tie!")
    }
    else if (computerChoice === psychic) {
        alert("computer chose psychic. It's a tie!")
    }
    else if (computerChoice === bug) {
        alert("computer chose bug. You win!")
    }
    else if (computerChoice === rock) {
        alert("computer chose Rock. It's a tie!")
    }
    else if (computerChoice === ghost) {
        alert("computer chose ghost. It's a tie!")
    }
    else if (computerChoice === dragon) {
        alert("computer chose dragon. You win!")
    }
    else if (computerChoice === dark) {
        alert("computer chose dark. You win!")
    }
    else if (computerChoice === steel) {
        alert("computer chose steel. You lost...")
    }
    else if (computerChoice === fairy) {
        alert("computer chose fairy. It's a tie!")
    }
}