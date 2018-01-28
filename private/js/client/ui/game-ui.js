class GameUi {
    constructor(game) {
        this.game = game;
        this.element = document.getElementById('game');
        this.hud = document.getElementById('hud');
        this.border = document.getElementById('border');
        this.data = {};
    }

    render() {
        let text = '';
        for (let id in this.data.collectState) {
            if (this.data.collectState[id] !== null) {
                text += `Team ${id} is ${this.data.collectState[id]}<br>`;
            }
        }
        this.hud.innerHTML = text;
    }

    show() {
        this.element.style.display = 'block';
        this.hud.style.display = 'block';
        this.border.style.display = 'block';
    }

    hide() {
        this.element.style.display = 'none';
        this.hud.style.display = 'none';
        this.border.style.display = 'none';
    }
}
