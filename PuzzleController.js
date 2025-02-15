
class Controller {
    static async TimerPage(msg, seconds) {
        this.showPage(msg);
        await this.timer(() => {
            msg.style.display = "none"
        }, seconds);
        msg.style.display = "none"
    }

    static showPage(el) {
        el.style.display = "block";
    }
    static hidePage(el) {
        el.style.display = "block";
    }

    static ToPuzzlePage() {
        window.location.href = 'puzzle.html';
    }
    
    static ToHomePage() {
        window.location.href = 'index.html';

    }
    
    static async timer(func, seconds) {
        return new Promise((func) => {
            setTimeout(() => {
                func();
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
    static createElement(tag, attributes = {}, content = "") {
        const element = document.createElement(tag);
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        element.innerHTML = content;
        return element;
    }

    static createButton(id, text, onClick) {
        const button = this.createElement('button', { class: id }, text);
        button.addEventListener('click', onClick);
        return button;
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
    static instance = new Game();
    static level = 0;
    static questions = [{
        question: "When do we break up?",
        options: ["Feb 12 2025", "Feb 13 2025", "Now", "In the future"],
        answer: "Feb 13 2025"
    },
    {
        question: "When did we fall off?",
        options: ["NEVER!!!"],
        answer: "NEVER!!!"
    },
    {
        question: "Who is the egotistical one?",
        options: ["Weneville", "Shan", "Nashville", "Taylor Swift"],
        answer: "Taylor Swift"
    },
    {
        question: "Do you love me?",
        options: ["Yes", "No"],
    }
]

static check(answer) {
    console.log(this.questions[this.level].answer)
    if(this.questions[this.level].answer === answer) {
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
console.log("HHH");
let firstMsg = document.getElementById("msg-1");
let secondMsg = document.getElementById("msg-2");
let quizMsg = document.getElementById("quiz-1");
(async () => {
    // await Controller.TimerPage(firstMsg, 7);
    // await Controller.TimerPage(secondMsg, 7);
    Controller.showPage(quizMsg);
    for(let i = 0; i < Game.questions.length; i++) {
        const quest = document.getElementById(`question-${i+1}`)
        document.getElementById(`question-${i+1}-2`).innerHTML = Game.questions[i].question;
        console.log(Game.questions[i].options)
        Game.questions[i].options.forEach((el, idx) => {
            const btn = Controller.createButton(`no`, el, async () => {
                let isCorrect = Game.check(el);
                if(isCorrect) {
                    Game.level++;
                    // Controller.hidePage(document.getElementById(`question-${Game.level}`));
                    Controller.showPage(document.getElementById(`question-${i+2}`))
                }
                
                else if(i < 3) {
                    Game.level = 0;
                    Controller.ToHomePage();
                }
                let isFinal = Game.checkFinal(el);
                if(isFinal && i === 3) {
                    console.log("You're so cute")
                    document.getElementById("final-msg").innerHTML = "You're so cute"
                    Controller.showPage(document.getElementById("final"))
                    await Controller.timer(
                        Controller.ToHomePage(),
                        5);
                    
                }
                else if(!isFinal && i === 3) {
                    console.log("FUCK YOU!!!!")
                    document.getElementById("final-msg").innerHTML = "FUCK YOU!!!!"
                    Controller.showPage(document.getElementById("final"))
                    await Controller.timer(
                        Controller.ToHomePage(),
                        5);
                }
            });
            quest.appendChild(btn)
        })
        
    }
    Controller.showPage(document.getElementById("question-1"))
})();
console.log(Game.instance.questions)