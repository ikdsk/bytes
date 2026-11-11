import { Game } from '../game.js';
export class Console {
    static init() {
        Console.buttons = {
            start: Console.find_button("#start"),
            pause: Console.find_button("#pause"),
            reset: Console.find_button("#reset")
        };
        Console.buttons.start.onclick = () => { Game.start(); };
        Console.buttons.pause.onclick = () => { Game.pause(); };
        Console.buttons.reset.onclick = () => { Game.reset(); };
    }
    static find_button(selector) {
        let button = document.querySelector(selector);
        if (!button) {
            throw new Error(`Button not found: ${selector}`);
        }
        return button;
    }
}
