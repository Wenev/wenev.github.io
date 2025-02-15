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