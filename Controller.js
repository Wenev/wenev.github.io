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
        
    }
}