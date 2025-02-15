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