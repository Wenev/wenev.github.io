document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("to-quiz");
    if (button) {
        button.addEventListener("click", () => {
            console.log("H");
            Controller.ToPuzzlePage();
        });
    }
});

class Controller {
    static ToPuzzlePage() {
        window.location.href = 'puzzle.html';
    }

    static async timer(seconds) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

    static showPopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "block";
        popup.disabled = false;
    }
    
    static hidePopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "none";
        popup.disabled = false;
    }

    static createPlayer() {
        player = new Player(100, 100);
    }
}

class Player {
    health;
    love;
    constructor(health, love) {
        this.health = health;
        this.love = love
    }

    getHealth() {
        return this.health;
    }

    setHealth(health) {
        this.health = health;
    }

    getLove() {
        return this.love;
    }

    setLove(love) {
        this.love = love;
    }
}

class Game {
    static instance;
    static level = 0;
    questions = [{
        question: "When do we break up?",
        options: ["Feb 12 2025", "Feb 13 2025", "Now", "In the future"],
        answer: "Feb 13 2025"
    },
    {
        questions: "When did we fall off?",
        options: ["NEVER!!!"],
        answer: "NEVER!!!"
    },
    {
        questions: "Who is the egotistical one?",
        options: ["Weneville", "Shan", "Nashville", "Taylor Swift"],
        answer: "Taylor Swift"
    },
    {
        questions: "Do you love me?",
        options: ["Yes", "No"],
    }
]

    static check(answer) {
        if(questions[level].answer === answer) {
            return true;
        }
        return false
    }

    static checkFinal(answer) {
        if(answer === "Yes") {
            return true;
        }
        if(answer === "No") {
            return false;
        }
    }

    static getInstance() {
        if(!instance) {
            instance = this;
        }
        return instance
    }
}