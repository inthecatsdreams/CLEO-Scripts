import { KeyCode } from "./.config/enums";
const player = new Player(0);
if (player.isPlaying()) {
    setInterval(() => {
        player.setHealth(100);
    }, 100);
}
