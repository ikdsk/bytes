import { Game } from '../game.js'

interface IButtons {
    start: HTMLButtonElement
    pause: HTMLButtonElement
    reset: HTMLButtonElement
}

export class Console {

    // Filled in by init()
    static buttons: IButtons

    static init() {

        Console.buttons = {
            start: Console.find_button("#start"),
            pause: Console.find_button("#pause"),
            reset: Console.find_button("#reset")
        }

        Console.buttons.start.onclick = () => { Game.start() }
        Console.buttons.pause.onclick = () => { Game.pause() }
        Console.buttons.reset.onclick = () => { Game.reset() }
    }

    private static find_button(selector: string): HTMLButtonElement {

        let button = document.querySelector<HTMLButtonElement>(selector)
        if (!button) { throw new Error(`Button not found: ${selector}`) }
        return button
    }
}