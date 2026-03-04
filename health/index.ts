import { KeyCode } from "../.config/enums";
const player = new Player(0);
let hosts = ["gta3_unreal", "vc_unreal", "sa_unreal"];
if (HOST == hosts[0] || HOST == hosts[1] || HOST == hosts[2]) {

    if (player.isPlaying()) {
        setInterval(() => {
            player.setHealth(250);
            player.setNeverGetsTired(true);
            player.addArmour(250);
            
        }, 100);
    }

}
else {
    exit("Unsupported game");
}
