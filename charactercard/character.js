// Buttons for logic
const attackButton = document.getElementById('attacked');
const levelUp = document.getElementById('levelup');


const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    attacked: function () {
        attackButton.addEventListener("click", () => {
            if (this.health <= 0) {
                window.alert("This character has died.");
                return;
            }

            this.health -= 20;
            UpdateStats();
        });
    },
    levelUp: function () {
        levelUp.addEventListener("click", () => {
            this.level++;
            UpdateStats();
        });
    }
}

character.attacked();
character.levelUp();

// Div elements for updating
const characterName = document.querySelector('.name');
const stats = document.querySelector('.stats');


// Set stats
const className = document.getElementById("class");
className.textContent = "Class: " + character.class;

const level = document.getElementById('level');
level.textContent = "Level: " + character.level;

const health = document.getElementById('health');
health.textContent = "Health: " + character.health;


// To update later
const UpdateStats = () => {
    level.textContent = "Level: " + character.level;
    health.textContent = "Health: " + character.health;
};


characterName.textContent = character.name;

